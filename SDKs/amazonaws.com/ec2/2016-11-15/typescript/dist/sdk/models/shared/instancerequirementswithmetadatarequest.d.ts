import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceRequirementsRequest } from "./instancerequirementsrequest";
export declare enum InstanceRequirementsWithMetadataRequestArchitectureTypesEnum {
    I386 = "i386",
    X8664 = "x86_64",
    Arm64 = "arm64",
    X8664Mac = "x86_64_mac",
    Arm64Mac = "arm64_mac"
}
export declare enum InstanceRequirementsWithMetadataRequestVirtualizationTypesEnum {
    Hvm = "hvm",
    Paravirtual = "paravirtual"
}
/**
 * <p>The architecture type, virtualization type, and other attributes for the instance types. When you specify instance attributes, Amazon EC2 will identify instance types with those attributes.</p> <p>If you specify <code>InstanceRequirementsWithMetadataRequest</code>, you can't specify <code>InstanceTypes</code>.</p>
 */
export declare class InstanceRequirementsWithMetadataRequest extends SpeakeasyBase {
    architectureTypes?: InstanceRequirementsWithMetadataRequestArchitectureTypesEnum[];
    instanceRequirements?: InstanceRequirementsRequest;
    virtualizationTypes?: InstanceRequirementsWithMetadataRequestVirtualizationTypesEnum[];
}

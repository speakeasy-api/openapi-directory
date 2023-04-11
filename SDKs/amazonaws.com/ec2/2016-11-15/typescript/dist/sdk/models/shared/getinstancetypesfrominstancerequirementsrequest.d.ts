import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceRequirementsRequest } from "./instancerequirementsrequest";
export declare enum GetInstanceTypesFromInstanceRequirementsRequestArchitectureTypesEnum {
    I386 = "i386",
    X8664 = "x86_64",
    Arm64 = "arm64",
    X8664Mac = "x86_64_mac",
    Arm64Mac = "arm64_mac"
}
export declare enum GetInstanceTypesFromInstanceRequirementsRequestVirtualizationTypesEnum {
    Hvm = "hvm",
    Paravirtual = "paravirtual"
}
export declare class GetInstanceTypesFromInstanceRequirementsRequest extends SpeakeasyBase {
    architectureTypes: GetInstanceTypesFromInstanceRequirementsRequestArchitectureTypesEnum[];
    dryRun?: boolean;
    instanceRequirements: InstanceRequirementsRequest;
    maxResults?: number;
    nextToken?: string;
    virtualizationTypes: GetInstanceTypesFromInstanceRequirementsRequestVirtualizationTypesEnum[];
}

import { SpeakeasyBase } from "../../../internal/utils";
import { VmwareToAwsTagMapping } from "./vmwaretoawstagmapping";
/**
 * Success
 */
export declare class GetHypervisorPropertyMappingsOutput extends SpeakeasyBase {
    hypervisorArn?: string;
    iamRoleArn?: string;
    vmwareToAwsTagMappings?: VmwareToAwsTagMapping[];
}

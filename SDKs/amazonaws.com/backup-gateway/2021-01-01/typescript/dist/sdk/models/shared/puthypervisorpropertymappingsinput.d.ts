import { SpeakeasyBase } from "../../../internal/utils";
import { VmwareToAwsTagMapping } from "./vmwaretoawstagmapping";
export declare class PutHypervisorPropertyMappingsInput extends SpeakeasyBase {
    hypervisorArn: string;
    iamRoleArn: string;
    vmwareToAwsTagMappings: VmwareToAwsTagMapping[];
}

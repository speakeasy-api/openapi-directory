import { SpeakeasyBase } from "../../../internal/utils";
import { CallAsEnum } from "./callasenum";
import { DeploymentTargets } from "./deploymenttargets";
import { StackSetOperationPreferences } from "./stacksetoperationpreferences";
export declare class DeleteStackInstancesInput extends SpeakeasyBase {
    accounts?: string[];
    callAs?: CallAsEnum;
    deploymentTargets?: DeploymentTargets;
    operationId?: string;
    operationPreferences?: StackSetOperationPreferences;
    regions: string[];
    retainStacks: boolean;
    stackSetName: string;
}

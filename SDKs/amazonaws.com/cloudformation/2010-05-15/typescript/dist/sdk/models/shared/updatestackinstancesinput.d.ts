import { SpeakeasyBase } from "../../../internal/utils";
import { CallAsEnum } from "./callasenum";
import { DeploymentTargets } from "./deploymenttargets";
import { Parameter } from "./parameter";
import { StackSetOperationPreferences } from "./stacksetoperationpreferences";
export declare class UpdateStackInstancesInput extends SpeakeasyBase {
    accounts?: string[];
    callAs?: CallAsEnum;
    deploymentTargets?: DeploymentTargets;
    operationId?: string;
    operationPreferences?: StackSetOperationPreferences;
    parameterOverrides?: Parameter[];
    regions: string[];
    stackSetName: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { CapabilityEnum } from "./capabilityenum";
import { Parameter } from "./parameter";
import { RollbackConfiguration } from "./rollbackconfiguration";
import { Tag } from "./tag";
/**
 * The input for an <a>UpdateStack</a> action.
 */
export declare class UpdateStackInput extends SpeakeasyBase {
    capabilities?: CapabilityEnum[];
    clientRequestToken?: string;
    disableRollback?: boolean;
    notificationARNs?: string[];
    parameters?: Parameter[];
    resourceTypes?: string[];
    roleARN?: string;
    rollbackConfiguration?: RollbackConfiguration;
    stackName: string;
    stackPolicyBody?: string;
    stackPolicyDuringUpdateBody?: string;
    stackPolicyDuringUpdateURL?: string;
    stackPolicyURL?: string;
    tags?: Tag[];
    templateBody?: string;
    templateURL?: string;
    usePreviousTemplate?: boolean;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { CapabilityEnum } from "./capabilityenum";
import { OnFailureEnum } from "./onfailureenum";
import { Parameter } from "./parameter";
import { RollbackConfiguration } from "./rollbackconfiguration";
import { Tag } from "./tag";
/**
 * The input for <a>CreateStack</a> action.
 */
export declare class CreateStackInput extends SpeakeasyBase {
    capabilities?: CapabilityEnum[];
    clientRequestToken?: string;
    disableRollback?: boolean;
    enableTerminationProtection?: boolean;
    notificationARNs?: string[];
    onFailure?: OnFailureEnum;
    parameters?: Parameter[];
    resourceTypes?: string[];
    roleARN?: string;
    rollbackConfiguration?: RollbackConfiguration;
    stackName: string;
    stackPolicyBody?: string;
    stackPolicyURL?: string;
    tags?: Tag[];
    templateBody?: string;
    templateURL?: string;
    timeoutInMinutes?: number;
}

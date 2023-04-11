import { SpeakeasyBase } from "../../../internal/utils";
import { CapabilityEnum } from "./capabilityenum";
import { ChangeSetTypeEnum } from "./changesettypeenum";
import { Parameter } from "./parameter";
import { ResourceToImport } from "./resourcetoimport";
import { RollbackConfiguration } from "./rollbackconfiguration";
import { Tag } from "./tag";
/**
 * The input for the <a>CreateChangeSet</a> action.
 */
export declare class CreateChangeSetInput extends SpeakeasyBase {
    capabilities?: CapabilityEnum[];
    changeSetName: string;
    changeSetType?: ChangeSetTypeEnum;
    clientToken?: string;
    description?: string;
    includeNestedStacks?: boolean;
    notificationARNs?: string[];
    parameters?: Parameter[];
    resourceTypes?: string[];
    resourcesToImport?: ResourceToImport[];
    roleARN?: string;
    rollbackConfiguration?: RollbackConfiguration;
    stackName: string;
    tags?: Tag[];
    templateBody?: string;
    templateURL?: string;
    usePreviousTemplate?: boolean;
}

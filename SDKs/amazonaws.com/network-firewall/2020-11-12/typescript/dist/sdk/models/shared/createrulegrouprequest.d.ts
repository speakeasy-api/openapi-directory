import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionConfiguration } from "./encryptionconfiguration";
import { RuleGroup } from "./rulegroup";
import { RuleGroupTypeEnum } from "./rulegrouptypeenum";
import { SourceMetadata } from "./sourcemetadata";
import { Tag } from "./tag";
export declare class CreateRuleGroupRequest extends SpeakeasyBase {
    capacity: number;
    description?: string;
    dryRun?: boolean;
    encryptionConfiguration?: EncryptionConfiguration;
    ruleGroup?: RuleGroup;
    ruleGroupName: string;
    rules?: string;
    sourceMetadata?: SourceMetadata;
    tags?: Tag[];
    type: RuleGroupTypeEnum;
}

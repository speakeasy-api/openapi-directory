import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionConfiguration } from "./encryptionconfiguration";
import { RuleGroup } from "./rulegroup";
import { RuleGroupTypeEnum } from "./rulegrouptypeenum";
import { SourceMetadata } from "./sourcemetadata";
export declare class UpdateRuleGroupRequest extends SpeakeasyBase {
    description?: string;
    dryRun?: boolean;
    encryptionConfiguration?: EncryptionConfiguration;
    ruleGroup?: RuleGroup;
    ruleGroupArn?: string;
    ruleGroupName?: string;
    rules?: string;
    sourceMetadata?: SourceMetadata;
    type?: RuleGroupTypeEnum;
    updateToken: string;
}

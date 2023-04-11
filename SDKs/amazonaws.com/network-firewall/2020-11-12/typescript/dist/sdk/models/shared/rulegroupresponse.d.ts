import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionConfiguration } from "./encryptionconfiguration";
import { ResourceStatusEnum } from "./resourcestatusenum";
import { RuleGroupTypeEnum } from "./rulegrouptypeenum";
import { SourceMetadata } from "./sourcemetadata";
import { Tag } from "./tag";
/**
 * The high-level properties of a rule group. This, along with the <a>RuleGroup</a>, define the rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>.
 */
export declare class RuleGroupResponse extends SpeakeasyBase {
    capacity?: number;
    consumedCapacity?: number;
    description?: string;
    encryptionConfiguration?: EncryptionConfiguration;
    lastModifiedTime?: Date;
    numberOfAssociations?: number;
    ruleGroupArn: string;
    ruleGroupId: string;
    ruleGroupName: string;
    ruleGroupStatus?: ResourceStatusEnum;
    snsTopic?: string;
    sourceMetadata?: SourceMetadata;
    tags?: Tag[];
    type?: RuleGroupTypeEnum;
}

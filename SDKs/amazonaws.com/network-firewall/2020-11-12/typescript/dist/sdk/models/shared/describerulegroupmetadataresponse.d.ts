import { SpeakeasyBase } from "../../../internal/utils";
import { RuleGroupTypeEnum } from "./rulegrouptypeenum";
import { StatefulRuleOptions } from "./statefulruleoptions";
/**
 * Success
 */
export declare class DescribeRuleGroupMetadataResponse extends SpeakeasyBase {
    capacity?: number;
    description?: string;
    lastModifiedTime?: Date;
    ruleGroupArn: string;
    ruleGroupName: string;
    /**
     * Additional options governing how Network Firewall handles the rule group. You can only use these for stateful rule groups.
     */
    statefulRuleOptions?: StatefulRuleOptions;
    type?: RuleGroupTypeEnum;
}

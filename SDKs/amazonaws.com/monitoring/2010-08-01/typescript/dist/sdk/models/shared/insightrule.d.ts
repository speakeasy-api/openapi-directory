import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This structure contains the definition for a Contributor Insights rule. For more information about this rule, see<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContributorInsights.html"> Using Constributor Insights to analyze high-cardinality data</a> in the <i>Amazon CloudWatch User Guide</i>.
 */
export declare class InsightRule extends SpeakeasyBase {
    definition: string;
    managedRule?: boolean;
    name: string;
    schema: string;
    state: string;
}

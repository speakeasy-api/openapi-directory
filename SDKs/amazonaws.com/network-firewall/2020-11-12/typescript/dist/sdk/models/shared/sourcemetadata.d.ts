import { SpeakeasyBase } from "../../../internal/utils";
/**
 * High-level information about the managed rule group that your own rule group is copied from. You can use the the metadata to track version updates made to the originating rule group. You can retrieve all objects for a rule group by calling <a href="https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_DescribeRuleGroup.html">DescribeRuleGroup</a>.
 */
export declare class SourceMetadata extends SpeakeasyBase {
    sourceArn?: string;
    sourceUpdateToken?: string;
}

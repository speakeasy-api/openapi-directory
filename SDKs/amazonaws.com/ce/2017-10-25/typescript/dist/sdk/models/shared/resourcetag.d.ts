import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>The tag structure that contains a tag key and value. </p> <note> <p>Tagging is supported only for the following Cost Explorer resource types: <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalyMonitor.html"> <code>AnomalyMonitor</code> </a>, <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalySubscription.html"> <code>AnomalySubscription</code> </a>, <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CostCategory.html"> <code>CostCategory</code> </a>.</p> </note>
 */
export declare class ResourceTag extends SpeakeasyBase {
    key: string;
    value: string;
}

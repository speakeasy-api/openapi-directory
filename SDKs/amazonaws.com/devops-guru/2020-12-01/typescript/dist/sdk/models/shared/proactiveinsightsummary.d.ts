import { SpeakeasyBase } from "../../../internal/utils";
import { InsightSeverityEnum } from "./insightseverityenum";
import { InsightStatusEnum } from "./insightstatusenum";
import { InsightTimeRange } from "./insighttimerange";
import { PredictionTimeRange } from "./predictiontimerange";
import { ResourceCollection } from "./resourcecollection";
import { ServiceCollection } from "./servicecollection";
/**
 * Details about a proactive insight. This object is returned by <code>DescribeInsight.</code>
 */
export declare class ProactiveInsightSummary extends SpeakeasyBase {
    associatedResourceArns?: string[];
    id?: string;
    /**
     *  A time ranged that specifies when the observed behavior in an insight started and ended.
     */
    insightTimeRange?: InsightTimeRange;
    name?: string;
    /**
     *  The time range during which anomalous behavior in a proactive anomaly or an insight is expected to occur.
     */
    predictionTimeRange?: PredictionTimeRange;
    /**
     *  A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks.
     */
    resourceCollection?: ResourceCollection;
    serviceCollection?: ServiceCollection;
    severity?: InsightSeverityEnum;
    status?: InsightStatusEnum;
}

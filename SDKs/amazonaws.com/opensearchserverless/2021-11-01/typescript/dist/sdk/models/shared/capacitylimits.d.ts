import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The maximum capacity limits for all OpenSearch Serverless collections, in OpenSearch Compute Units (OCUs). These limits are used to scale your collections based on the current workload. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-scaling.html">Managing capacity limits for Amazon OpenSearch Serverless</a>.
 */
export declare class CapacityLimits extends SpeakeasyBase {
    maxIndexingCapacityInOCU?: number;
    maxSearchCapacityInOCU?: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { CapacityLimits } from "./capacitylimits";
export declare class UpdateAccountSettingsRequest extends SpeakeasyBase {
    /**
     * The maximum capacity limits for all OpenSearch Serverless collections, in OpenSearch Compute Units (OCUs). These limits are used to scale your collections based on the current workload. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-scaling.html">Managing capacity limits for Amazon OpenSearch Serverless</a>.
     */
    capacityLimits?: CapacityLimits;
}

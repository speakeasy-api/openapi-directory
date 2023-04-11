import { SpeakeasyBase } from "../../../internal/utils";
import { RelationshipTypeEnum } from "./relationshiptypeenum";
/**
 * <p>Aggregated details about the measures contributing to the anomaly group, and the measures potentially impacted by the anomaly group.</p> <p/>
 */
export declare class InterMetricImpactDetails extends SpeakeasyBase {
    anomalyGroupId?: string;
    contributionPercentage?: number;
    metricName?: string;
    relationshipType?: RelationshipTypeEnum;
}

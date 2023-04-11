import { SpeakeasyBase } from "../../../internal/utils";
import { AnomalousService } from "./anomalousservice";
import { InsightCategoryEnum } from "./insightcategoryenum";
import { InsightStateEnum } from "./insightstateenum";
import { RequestImpactStatistics } from "./requestimpactstatistics";
import { ServiceId } from "./serviceid";
/**
 * Information that describes an insight.
 */
export declare class InsightSummary extends SpeakeasyBase {
    categories?: InsightCategoryEnum[];
    clientRequestImpactStatistics?: RequestImpactStatistics;
    endTime?: Date;
    groupARN?: string;
    groupName?: string;
    insightId?: string;
    lastUpdateTime?: Date;
    /**
     * <p/>
     */
    rootCauseServiceId?: ServiceId;
    rootCauseServiceRequestImpactStatistics?: RequestImpactStatistics;
    startTime?: Date;
    state?: InsightStateEnum;
    summary?: string;
    topAnomalousServices?: AnomalousService[];
}

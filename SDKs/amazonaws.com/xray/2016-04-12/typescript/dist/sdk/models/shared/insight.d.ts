import { SpeakeasyBase } from "../../../internal/utils";
import { AnomalousService } from "./anomalousservice";
import { InsightCategoryEnum } from "./insightcategoryenum";
import { InsightStateEnum } from "./insightstateenum";
import { RequestImpactStatistics } from "./requestimpactstatistics";
import { ServiceId } from "./serviceid";
/**
 * When fault rates go outside of the expected range, X-Ray creates an insight. Insights tracks emergent issues within your applications.
 */
export declare class Insight extends SpeakeasyBase {
    categories?: InsightCategoryEnum[];
    clientRequestImpactStatistics?: RequestImpactStatistics;
    endTime?: Date;
    groupARN?: string;
    groupName?: string;
    insightId?: string;
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

import { SpeakeasyBase } from "../../../internal/utils";
import { AnomalousService } from "./anomalousservice";
import { RequestImpactStatistics } from "./requestimpactstatistics";
/**
 * X-Ray reevaluates insights periodically until they are resolved, and records each intermediate state in an event. You can review incident events in the Impact Timeline on the Inspect page in the X-Ray console.
 */
export declare class InsightEvent extends SpeakeasyBase {
    clientRequestImpactStatistics?: RequestImpactStatistics;
    eventTime?: Date;
    rootCauseServiceRequestImpactStatistics?: RequestImpactStatistics;
    summary?: string;
    topAnomalousServices?: AnomalousService[];
}

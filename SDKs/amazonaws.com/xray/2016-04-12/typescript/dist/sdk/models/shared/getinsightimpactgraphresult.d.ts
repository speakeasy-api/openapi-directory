import { SpeakeasyBase } from "../../../internal/utils";
import { InsightImpactGraphService } from "./insightimpactgraphservice";
/**
 * Success
 */
export declare class GetInsightImpactGraphResult extends SpeakeasyBase {
    endTime?: Date;
    insightId?: string;
    nextToken?: string;
    serviceGraphEndTime?: Date;
    serviceGraphStartTime?: Date;
    services?: InsightImpactGraphService[];
    startTime?: Date;
}

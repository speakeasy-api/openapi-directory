import { SpeakeasyBase } from "../../../internal/utils";
export declare class ApiCoreDtoAggregatedAggregatedResult extends SpeakeasyBase {
    /**
     *  (A date in "YmdHis" format)
     */
    activityDay?: string;
    commissionsCost?: number;
    conversionsCost?: number;
    conversionsValue?: number;
    convertedClicks?: number;
    entityData?: Record<string, any>;
    entityId?: string;
    /**
     *  (A date in "YmdHis" format)
     */
    fromDay?: string;
    hourlyBreakDown?: Record<string, ApiCoreDtoAggregatedAggregatedResult>;
    /**
     *  (A date in "YmdHis" format)
     */
    lastHitDate?: string;
    spiderHitsCount?: number;
    /**
     *  (A date in "YmdHis" format)
     */
    toDay?: string;
    totalClicks?: number;
    totalViews?: number;
    uniqueClicks?: number;
    uniqueConversions?: number;
    uniqueViews?: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDailyStatsQueryParams extends SpeakeasyBase {
    apiKey?: string;
    carType?: shared.ApiKeyEnum;
    cityState?: string;
    country?: shared.ApiKeyEnum8;
    state?: string;
    taxonomyVin?: string;
    vin?: string;
    ymm?: string;
    ymmt?: string;
}
export declare class GetDailyStatsRequest extends SpeakeasyBase {
    queryParams: GetDailyStatsQueryParams;
}
export declare class GetDailyStatsResponse extends SpeakeasyBase {
    contentType: string;
    dailyStats?: shared.DailyStats;
    error?: shared.ErrorT;
    statusCode: number;
}

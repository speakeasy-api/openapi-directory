import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * queryName
 */
export declare enum GETDataCountUsingGETQueryNameEnum {
    ActiveUsersNow = "activeUsersNow",
    DailyActiveUsers = "dailyActiveUsers",
    AverageDailyActiveUsers = "averageDailyActiveUsers",
    LastMonthlyActiveUsers = "lastMonthlyActiveUsers",
    MonthlyActiveUsers = "monthlyActiveUsers",
    AverageSessionDuration = "averageSessionDuration"
}
/**
 * stage
 */
export declare enum GETDataCountUsingGETStageEnum {
    Live = "LIVE",
    Preview = "PREVIEW"
}
export declare class GETDataCountUsingGETRequest extends SpeakeasyBase {
    /**
     * apiKey
     */
    apiKey: string;
    /**
     * queryName
     */
    queryName: GETDataCountUsingGETQueryNameEnum;
    /**
     * stage
     */
    stage: GETDataCountUsingGETStageEnum;
}
export declare class GETDataCountUsingGETResponse extends SpeakeasyBase {
    /**
     * OK
     */
    analyticsDataCountSwaggerModel?: shared.AnalyticsDataCountSwaggerModel;
    contentType: string;
    /**
     * json error
     */
    messageModel?: shared.MessageModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

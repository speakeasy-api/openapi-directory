import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * dataType
 */
export declare enum GETAnalyticsDataUsingGETDataTypeEnum {
    ActiveDevices = "activeDevices",
    ActiveLocations = "activeLocations",
    ActiveUsers = "activeUsers",
    AverageBandwidthPerUser = "averageBandwidthPerUser",
    AverageDauOverMau = "averageDauOverMau",
    AverageJsExecutionTime = "averageJsExecutionTime",
    AverageRequestsPerUser = "averageRequestsPerUser",
    AverageResponseTime = "averageResponseTime",
    AverageResponseTimePerType = "averageResponseTimePerType",
    ScriptLogLevelsCount = "scriptLogLevelsCount",
    SessionAnalytic = "sessionAnalytic",
    StoragePerUser = "storagePerUser",
    CustomAnalyticTotal = "customAnalyticTotal",
    CustomAnalyticUser = "customAnalyticUser",
    TimedAnalyticTotal = "timedAnalyticTotal",
    SessionAnalyticTotal = "sessionAnalyticTotal",
    ConnectedUsers = "connectedUsers"
}
/**
 * precision
 */
export declare enum GETAnalyticsDataUsingGETPrecisionEnum {
    Hourly = "HOURLY",
    Daily = "DAILY",
    Monthly = "MONTHLY"
}
/**
 * stage
 */
export declare enum GETAnalyticsDataUsingGETStageEnum {
    Live = "LIVE",
    Preview = "PREVIEW"
}
export declare class GETAnalyticsDataUsingGETRequest extends SpeakeasyBase {
    /**
     * apiKey
     */
    apiKey: string;
    /**
     * dataType
     */
    dataType: GETAnalyticsDataUsingGETDataTypeEnum;
    /**
     * yyyy-MM-dd
     */
    endDate: Date;
    /**
     * the keys to select. For example "ReturningUsers", "NewUsers", etc
     */
    keys?: string;
    /**
     * precision
     */
    precision: GETAnalyticsDataUsingGETPrecisionEnum;
    /**
     * stage
     */
    stage: GETAnalyticsDataUsingGETStageEnum;
    /**
     * yyyy-MM-dd
     */
    startDate: Date;
}
export declare class GETAnalyticsDataUsingGETResponse extends SpeakeasyBase {
    /**
     * OK
     */
    analyticsDataSwaggerModels?: shared.AnalyticsDataSwaggerModel[];
    contentType: string;
    /**
     * json error
     */
    messageModel?: shared.MessageModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

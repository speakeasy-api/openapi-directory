import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * stage
 */
export declare enum GETRetentionUsingGETStageEnum {
    Live = "LIVE",
    Preview = "PREVIEW"
}
export declare class GETRetentionUsingGETRequest extends SpeakeasyBase {
    /**
     * apiKey
     */
    apiKey: string;
    /**
     * stage
     */
    stage: GETRetentionUsingGETStageEnum;
}
export declare class GETRetentionUsingGETResponse extends SpeakeasyBase {
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

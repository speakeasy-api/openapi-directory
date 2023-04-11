import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * stage
 */
export declare enum GETGameSummaryUsingGETStageEnum {
    Live = "LIVE",
    Preview = "PREVIEW"
}
export declare class GETGameSummaryUsingGETRequest extends SpeakeasyBase {
    /**
     * apiKey
     */
    apiKey: string;
    /**
     * yyyy-MM-dd
     */
    endDate: Date;
    /**
     * stage
     */
    stage: GETGameSummaryUsingGETStageEnum;
    /**
     * yyyy-MM-dd
     */
    startDate: Date;
}
export declare class GETGameSummaryUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    gameSummaryModel?: shared.GameSummaryModel;
    /**
     * json error
     */
    messageModel?: shared.MessageModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

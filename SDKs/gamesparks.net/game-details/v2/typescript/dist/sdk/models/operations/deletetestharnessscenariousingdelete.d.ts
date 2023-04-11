import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DELETETestHarnessScenarioUsingDELETERequest extends SpeakeasyBase {
    /**
     * apiKey
     */
    apiKey: string;
    /**
     * scenarioName
     */
    scenarioName: string;
}
export declare class DELETETestHarnessScenarioUsingDELETEResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    messageModel?: shared.MessageModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

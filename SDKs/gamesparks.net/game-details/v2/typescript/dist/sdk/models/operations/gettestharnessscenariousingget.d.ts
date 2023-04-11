import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GETTestHarnessScenarioUsingGETRequest extends SpeakeasyBase {
    /**
     * apiKey
     */
    apiKey: string;
    /**
     * scenarioName
     */
    scenarioName: string;
}
export declare class GETTestHarnessScenarioUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * json error
     */
    messageModel?: shared.MessageModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    testHarnessScenarioModel?: shared.TestHarnessScenarioModel;
}

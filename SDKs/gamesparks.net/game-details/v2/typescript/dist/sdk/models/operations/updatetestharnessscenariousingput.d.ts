import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateTestHarnessScenarioUsingPUTRequest extends SpeakeasyBase {
    /**
     * testHarnessScenarioDTO
     */
    testHarnessScenarioModel: shared.TestHarnessScenarioModel;
    /**
     * apiKey
     */
    apiKey: string;
    /**
     * scenarioName
     */
    scenarioName: string;
}
export declare class UpdateTestHarnessScenarioUsingPUTResponse extends SpeakeasyBase {
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

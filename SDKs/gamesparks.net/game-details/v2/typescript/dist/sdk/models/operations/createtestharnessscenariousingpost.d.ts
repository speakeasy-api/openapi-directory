import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateTestHarnessScenarioUsingPOSTRequest extends SpeakeasyBase {
    /**
     * testHarnessScenarioDTO
     */
    testHarnessScenarioModel: shared.TestHarnessScenarioModel;
    /**
     * apiKey
     */
    apiKey: string;
}
export declare class CreateTestHarnessScenarioUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * json error
     */
    messageModel?: shared.MessageModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    testHarnessScenarioModel?: shared.TestHarnessScenarioModel;
}

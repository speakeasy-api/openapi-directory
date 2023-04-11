import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GETTestHarnessScenariosUsingGETRequest extends SpeakeasyBase {
    /**
     * apiKey
     */
    apiKey: string;
}
export declare class GETTestHarnessScenariosUsingGETResponse extends SpeakeasyBase {
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
    testHarnessScenarioModels?: shared.TestHarnessScenarioModel[];
}

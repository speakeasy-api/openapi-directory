import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateExperimentUsingPOSTRequest extends SpeakeasyBase {
    /**
     * input
     */
    experimentModel: shared.ExperimentModel;
    /**
     * apiKey
     */
    apiKey: string;
}
export declare class CreateExperimentUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Created
     */
    experimentModel?: shared.ExperimentModel;
    /**
     * json error
     */
    messageModel?: shared.MessageModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

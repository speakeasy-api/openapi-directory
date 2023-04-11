import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GETExperimentUsingGETRequest extends SpeakeasyBase {
    /**
     * apiKey
     */
    apiKey: string;
    /**
     * id
     */
    id: number;
}
export declare class GETExperimentUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    experimentModel?: shared.ExperimentModel;
    /**
     * json error
     */
    messageModel?: shared.MessageModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

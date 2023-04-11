import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GETExperimentsUsingGETRequest extends SpeakeasyBase {
    /**
     * apiKey
     */
    apiKey: string;
}
export declare class GETExperimentsUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    experimentModels?: shared.ExperimentModel[];
    /**
     * json error
     */
    messageModel?: shared.MessageModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

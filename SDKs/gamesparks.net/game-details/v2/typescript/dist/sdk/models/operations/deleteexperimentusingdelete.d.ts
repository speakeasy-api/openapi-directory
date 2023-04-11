import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DELETEExperimentUsingDELETERequest extends SpeakeasyBase {
    /**
     * apiKey
     */
    apiKey: string;
    /**
     * id
     */
    id: number;
}
export declare class DELETEExperimentUsingDELETEResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    messageModel?: shared.MessageModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

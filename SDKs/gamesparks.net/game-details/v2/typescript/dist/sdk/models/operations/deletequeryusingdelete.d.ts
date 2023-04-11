import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DELETEQueryUsingDELETERequest extends SpeakeasyBase {
    /**
     * apiKey
     */
    apiKey: string;
    /**
     * shortCode
     */
    shortCode: string;
}
export declare class DELETEQueryUsingDELETEResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    manageResult?: shared.ManageResult;
    /**
     * json error
     */
    messageModel?: shared.MessageModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

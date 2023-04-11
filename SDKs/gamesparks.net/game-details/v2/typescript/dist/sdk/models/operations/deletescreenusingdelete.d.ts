import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DELETEScreenUsingDELETERequest extends SpeakeasyBase {
    /**
     * apiKey
     */
    apiKey: string;
    /**
     * shortCode
     */
    shortCode: string;
}
export declare class DELETEScreenUsingDELETEResponse extends SpeakeasyBase {
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

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GETScreenUsingGETRequest extends SpeakeasyBase {
    /**
     * apiKey
     */
    apiKey: string;
    /**
     * shortCode
     */
    shortCode: string;
}
export declare class GETScreenUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    manageScreen?: shared.ManageScreen;
    /**
     * json error
     */
    messageModel?: shared.MessageModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

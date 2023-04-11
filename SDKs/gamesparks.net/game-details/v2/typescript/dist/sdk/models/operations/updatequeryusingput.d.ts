import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateQueryUsingPUTRequest extends SpeakeasyBase {
    /**
     * query
     */
    manageQuery: shared.ManageQuery;
    /**
     * apiKey
     */
    apiKey: string;
    /**
     * shortCode
     */
    shortCode: string;
}
export declare class UpdateQueryUsingPUTResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    manageQuery?: shared.ManageQuery;
    /**
     * json error
     */
    messageModel?: shared.MessageModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

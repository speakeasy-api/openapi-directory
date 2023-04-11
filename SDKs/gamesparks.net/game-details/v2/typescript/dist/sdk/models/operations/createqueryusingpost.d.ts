import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateQueryUsingPOSTRequest extends SpeakeasyBase {
    /**
     * query
     */
    manageQuery: shared.ManageQuery;
    /**
     * apiKey
     */
    apiKey: string;
}
export declare class CreateQueryUsingPOSTResponse extends SpeakeasyBase {
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

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListScreensUsingGETRequest extends SpeakeasyBase {
    /**
     * apiKey
     */
    apiKey: string;
}
export declare class ListScreensUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    manageItemSummaries?: shared.ManageItemSummary[];
    /**
     * json error
     */
    messageModel?: shared.MessageModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

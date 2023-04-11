import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateScreenUsingPOSTRequest extends SpeakeasyBase {
    /**
     * screen
     */
    manageScreen: shared.ManageScreen;
    /**
     * apiKey
     */
    apiKey: string;
}
export declare class CreateScreenUsingPOSTResponse extends SpeakeasyBase {
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

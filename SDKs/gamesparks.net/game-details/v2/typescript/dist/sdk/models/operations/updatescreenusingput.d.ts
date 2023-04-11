import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateScreenUsingPUTRequest extends SpeakeasyBase {
    /**
     * screen
     */
    manageScreen: shared.ManageScreen;
    /**
     * apiKey
     */
    apiKey: string;
    /**
     * shortCode
     */
    shortCode: string;
}
export declare class UpdateScreenUsingPUTResponse extends SpeakeasyBase {
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

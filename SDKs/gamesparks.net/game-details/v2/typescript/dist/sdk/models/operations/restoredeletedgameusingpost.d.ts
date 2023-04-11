import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RestoreDeletedGameUsingPOSTRequest extends SpeakeasyBase {
    /**
     * apiKey
     */
    apiKey: string;
}
export declare class RestoreDeletedGameUsingPOSTResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    messageModel?: shared.MessageModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

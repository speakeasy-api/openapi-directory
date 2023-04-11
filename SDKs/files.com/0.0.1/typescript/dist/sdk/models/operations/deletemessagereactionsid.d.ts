import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteMessageReactionsIdRequest extends SpeakeasyBase {
    /**
     * Message Reaction ID.
     */
    id: number;
}
export declare class DeleteMessageReactionsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

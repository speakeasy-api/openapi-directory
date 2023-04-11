import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteMessageCommentReactionsIdRequest extends SpeakeasyBase {
    /**
     * Message Comment Reaction ID.
     */
    id: number;
}
export declare class DeleteMessageCommentReactionsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

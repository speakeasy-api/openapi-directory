import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteFileCommentReactionsIdRequest extends SpeakeasyBase {
    /**
     * File Comment Reaction ID.
     */
    id: number;
}
export declare class DeleteFileCommentReactionsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

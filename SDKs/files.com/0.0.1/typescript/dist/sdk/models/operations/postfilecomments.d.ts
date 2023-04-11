import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostFileCommentsRequestBody extends SpeakeasyBase {
    /**
     * Comment body.
     */
    body: string;
    /**
     * File path.
     */
    path: string;
}
export declare class PostFileCommentsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The FileComments object.
     */
    fileCommentEntity?: shared.FileCommentEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

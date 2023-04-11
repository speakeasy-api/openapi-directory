import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchFileCommentsIdRequestBody extends SpeakeasyBase {
    /**
     * Comment body.
     */
    body: string;
}
export declare class PatchFileCommentsIdRequest extends SpeakeasyBase {
    requestBody: PatchFileCommentsIdRequestBody;
    /**
     * File Comment ID.
     */
    id: number;
}
export declare class PatchFileCommentsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The FileComments object.
     */
    fileCommentEntity?: shared.FileCommentEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

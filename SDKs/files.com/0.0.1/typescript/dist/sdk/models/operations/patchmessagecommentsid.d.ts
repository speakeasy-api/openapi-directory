import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchMessageCommentsIdRequestBody extends SpeakeasyBase {
    /**
     * Comment body.
     */
    body: string;
}
export declare class PatchMessageCommentsIdRequest extends SpeakeasyBase {
    requestBody: PatchMessageCommentsIdRequestBody;
    /**
     * Message Comment ID.
     */
    id: number;
}
export declare class PatchMessageCommentsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The MessageComments object.
     */
    messageCommentEntity?: shared.MessageCommentEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

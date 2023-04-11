import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMessageCommentsIdRequest extends SpeakeasyBase {
    /**
     * Message Comment ID.
     */
    id: number;
}
export declare class GetMessageCommentsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The MessageComments object.
     */
    messageCommentEntity?: shared.MessageCommentEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
 */
export declare enum UpdateNodeCommentXSdsDateFormatEnum {
    Utc = "UTC",
    Local = "LOCAL",
    Offset = "OFFSET",
    Epoch = "EPOCH",
    Leet = "LEET"
}
export declare class UpdateNodeCommentRequest extends SpeakeasyBase {
    changeNodeCommentRequest: shared.ChangeNodeCommentRequest;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
    /**
     * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
     */
    xSdsDateFormat?: UpdateNodeCommentXSdsDateFormatEnum;
    /**
     * Comment ID
     */
    commentId: number;
}
export declare class UpdateNodeCommentResponse extends SpeakeasyBase {
    /**
     * OK
     */
    comment?: shared.Comment;
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

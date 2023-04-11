import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
 */
export declare enum CompleteFileUploadByTokenXSdsDateFormatEnum {
    Utc = "UTC",
    Local = "LOCAL",
    Offset = "OFFSET",
    Epoch = "EPOCH",
    Leet = "LEET"
}
export declare class CompleteFileUploadByTokenRequest extends SpeakeasyBase {
    completeUploadRequest?: shared.CompleteUploadRequest;
    /**
     * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
     */
    xSdsDateFormat?: CompleteFileUploadByTokenXSdsDateFormatEnum;
    /**
     * Upload token
     */
    token: string;
}
export declare class CompleteFileUploadByTokenResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * Created
     */
    node?: shared.Node;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
 */
export declare enum RequestPublicUploadShareInfoXSdsDateFormatEnum {
    Utc = "UTC",
    Local = "LOCAL",
    Offset = "OFFSET",
    Epoch = "EPOCH",
    Leet = "LEET"
}
export declare class RequestPublicUploadShareInfoRequest extends SpeakeasyBase {
    /**
     * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
     */
    xSdsDateFormat?: RequestPublicUploadShareInfoXSdsDateFormatEnum;
    /**
     * Upload share password. Should be base64-encoded.
     *
     * @remarks
     *
     * Plain X-Sds-Share-Passwords are *deprecated* and will be removed in the future
     */
    xSdsSharePassword?: string;
    /**
     * Access key
     */
    accessKey: string;
}
export declare class RequestPublicUploadShareInfoResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    publicUploadShare?: shared.PublicUploadShare;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

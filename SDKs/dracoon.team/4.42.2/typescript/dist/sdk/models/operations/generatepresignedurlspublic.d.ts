import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
 */
export declare enum GeneratePresignedUrlsPublicXSdsDateFormatEnum {
    Utc = "UTC",
    Local = "LOCAL",
    Offset = "OFFSET",
    Epoch = "EPOCH",
    Leet = "LEET"
}
export declare class GeneratePresignedUrlsPublicRequest extends SpeakeasyBase {
    generatePresignedUrlsRequest: shared.GeneratePresignedUrlsRequest;
    /**
     * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
     */
    xSdsDateFormat?: GeneratePresignedUrlsPublicXSdsDateFormatEnum;
    /**
     * Access key
     */
    accessKey: string;
    /**
     * Upload channel ID
     */
    uploadId: string;
}
export declare class GeneratePresignedUrlsPublicResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * Created
     */
    presignedUrlList?: shared.PresignedUrlList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

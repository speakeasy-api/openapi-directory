import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
 */
export declare enum CreateUploadShareXSdsDateFormatEnum {
    Utc = "UTC",
    Local = "LOCAL",
    Offset = "OFFSET",
    Epoch = "EPOCH",
    Leet = "LEET"
}
export declare class CreateUploadShareRequest extends SpeakeasyBase {
    createUploadShareRequest: shared.CreateUploadShareRequest;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
    /**
     * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
     */
    xSdsDateFormat?: CreateUploadShareXSdsDateFormatEnum;
}
export declare class CreateUploadShareResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    uploadShare?: shared.UploadShare;
    /**
     * Bad Request
     */
    createUploadShare400ApplicationJSONOneOf?: any;
}

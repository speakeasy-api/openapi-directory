import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
 */
export declare enum UpdateDownloadShareXSdsDateFormatEnum {
    Utc = "UTC",
    Local = "LOCAL",
    Offset = "OFFSET",
    Epoch = "EPOCH",
    Leet = "LEET"
}
export declare class UpdateDownloadShareRequest extends SpeakeasyBase {
    updateDownloadShareRequest: shared.UpdateDownloadShareRequest;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
    /**
     * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
     */
    xSdsDateFormat?: UpdateDownloadShareXSdsDateFormatEnum;
    /**
     * Share ID
     */
    shareId: number;
}
export declare class UpdateDownloadShareResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    downloadShare?: shared.DownloadShare;
    /**
     * Unauthorized
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    updateDownloadShare400ApplicationJSONOneOf?: any;
}

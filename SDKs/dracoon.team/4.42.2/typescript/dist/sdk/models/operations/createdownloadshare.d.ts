import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
 */
export declare enum CreateDownloadShareXSdsDateFormatEnum {
    Utc = "UTC",
    Local = "LOCAL",
    Offset = "OFFSET",
    Epoch = "EPOCH",
    Leet = "LEET"
}
export declare class CreateDownloadShareRequest extends SpeakeasyBase {
    createDownloadShareRequest: shared.CreateDownloadShareRequest;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
    /**
     * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
     */
    xSdsDateFormat?: CreateDownloadShareXSdsDateFormatEnum;
}
export declare class CreateDownloadShareResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Created
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
    createDownloadShare400ApplicationJSONOneOf?: any;
}

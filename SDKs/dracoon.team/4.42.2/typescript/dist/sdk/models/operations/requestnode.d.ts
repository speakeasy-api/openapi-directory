import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
 */
export declare enum RequestNodeXSdsDateFormatEnum {
    Utc = "UTC",
    Local = "LOCAL",
    Offset = "OFFSET",
    Epoch = "EPOCH",
    Leet = "LEET"
}
export declare class RequestNodeRequest extends SpeakeasyBase {
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
    /**
     * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
     */
    xSdsDateFormat?: RequestNodeXSdsDateFormatEnum;
    /**
     * Node ID
     */
    nodeId: number;
}
export declare class RequestNodeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    node?: shared.Node;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

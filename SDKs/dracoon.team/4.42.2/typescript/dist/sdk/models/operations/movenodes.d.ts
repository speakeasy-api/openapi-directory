import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
 */
export declare enum MoveNodesXSdsDateFormatEnum {
    Utc = "UTC",
    Local = "LOCAL",
    Offset = "OFFSET",
    Epoch = "EPOCH",
    Leet = "LEET"
}
export declare class MoveNodesRequest extends SpeakeasyBase {
    moveNodesRequest: shared.MoveNodesRequest;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
    /**
     * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
     */
    xSdsDateFormat?: MoveNodesXSdsDateFormatEnum;
    /**
     * Target parent node ID
     */
    nodeId: number;
}
export declare class MoveNodesResponse extends SpeakeasyBase {
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
    /**
     * No Content
     */
    moveNodes204ApplicationJSONString?: string;
}

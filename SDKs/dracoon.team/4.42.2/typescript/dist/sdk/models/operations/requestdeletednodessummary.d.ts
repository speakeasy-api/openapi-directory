import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
 */
export declare enum RequestDeletedNodesSummaryXSdsDateFormatEnum {
    Utc = "UTC",
    Local = "LOCAL",
    Offset = "OFFSET",
    Epoch = "EPOCH",
    Leet = "LEET"
}
export declare class RequestDeletedNodesSummaryRequest extends SpeakeasyBase {
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
    /**
     * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
     */
    xSdsDateFormat?: RequestDeletedNodesSummaryXSdsDateFormatEnum;
    /**
     * Filter string
     */
    filter?: string;
    /**
     * Range limit.
     *
     * @remarks
     *
     * Maximum 500.
     *
     *  For more results please use paging (`offset` + `limit`).
     */
    limit?: number;
    /**
     * Parent ID (can only be a room ID)
     */
    nodeId: number;
    /**
     * Range offset
     */
    offset?: number;
    /**
     * Sort string
     */
    sort?: string;
}
export declare class RequestDeletedNodesSummaryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    deletedNodeSummaryList?: shared.DeletedNodeSummaryList;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

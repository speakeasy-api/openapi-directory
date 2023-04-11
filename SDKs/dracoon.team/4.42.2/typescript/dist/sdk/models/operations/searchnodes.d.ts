import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
 */
export declare enum SearchNodesXSdsDateFormatEnum {
    Utc = "UTC",
    Local = "LOCAL",
    Offset = "OFFSET",
    Epoch = "EPOCH",
    Leet = "LEET"
}
export declare class SearchNodesRequest extends SpeakeasyBase {
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
    /**
     * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
     */
    xSdsDateFormat?: SearchNodesXSdsDateFormatEnum;
    /**
     * * `0` - top level nodes only (default)
     *
     * @remarks
     *
     * * `-1` - full tree
     *
     * * `n` (any positive number) - include `n` levels starting from the current node
     */
    depthLevel?: number;
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
     * Range offset
     */
    offset?: number;
    /**
     * Parent node ID.
     *
     * @remarks
     *
     * Only rooms and folders can be parents.
     *
     * Parent ID `0` or empty is the root node.
     */
    parentId?: number;
    /**
     * Search string
     */
    searchString: string;
    /**
     * Sort string
     */
    sort?: string;
}
export declare class SearchNodesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    nodeList?: shared.NodeList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

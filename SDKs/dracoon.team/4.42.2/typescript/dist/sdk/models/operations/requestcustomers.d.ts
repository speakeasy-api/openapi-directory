import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
 */
export declare enum RequestCustomersXSdsDateFormatEnum {
    Utc = "UTC",
    Local = "LOCAL",
    Offset = "OFFSET",
    Epoch = "EPOCH",
    Leet = "LEET"
}
export declare class RequestCustomersRequest extends SpeakeasyBase {
    /**
     * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
     */
    xSdsDateFormat?: RequestCustomersXSdsDateFormatEnum;
    /**
     * Service Authentication token
     */
    xSdsServiceToken?: string;
    /**
     * Filter string
     */
    filter?: string;
    /**
     * Include custom customer attributes.
     */
    includeAttributes?: boolean;
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
     * Sort string
     */
    sort?: string;
}
export declare class RequestCustomersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    customerList?: shared.CustomerList;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

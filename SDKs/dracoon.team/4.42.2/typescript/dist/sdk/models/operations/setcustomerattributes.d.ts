import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
 */
export declare enum SetCustomerAttributesXSdsDateFormatEnum {
    Utc = "UTC",
    Local = "LOCAL",
    Offset = "OFFSET",
    Epoch = "EPOCH",
    Leet = "LEET"
}
export declare class SetCustomerAttributesRequest extends SpeakeasyBase {
    customerAttributes: shared.CustomerAttributes;
    /**
     * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
     */
    xSdsDateFormat?: SetCustomerAttributesXSdsDateFormatEnum;
    /**
     * Service Authentication token
     */
    xSdsServiceToken?: string;
    /**
     * Customer ID
     */
    customerId: number;
}
export declare class SetCustomerAttributesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Created
     */
    customer?: shared.Customer;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

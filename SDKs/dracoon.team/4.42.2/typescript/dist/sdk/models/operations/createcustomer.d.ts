import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
 */
export declare enum CreateCustomerXSdsDateFormatEnum {
    Utc = "UTC",
    Local = "LOCAL",
    Offset = "OFFSET",
    Epoch = "EPOCH",
    Leet = "LEET"
}
export declare class CreateCustomerRequest extends SpeakeasyBase {
    newCustomerRequest: shared.NewCustomerRequest;
    /**
     * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
     */
    xSdsDateFormat?: CreateCustomerXSdsDateFormatEnum;
    /**
     * Service Authentication token
     */
    xSdsServiceToken?: string;
}
export declare class CreateCustomerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * Created
     */
    newCustomerResponse?: shared.NewCustomerResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    createCustomer400ApplicationJSONOneOf?: any;
}

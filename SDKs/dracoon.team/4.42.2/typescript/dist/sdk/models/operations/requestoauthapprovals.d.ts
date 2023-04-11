import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
 */
export declare enum RequestOAuthApprovalsXSdsDateFormatEnum {
    Utc = "UTC",
    Local = "LOCAL",
    Offset = "OFFSET",
    Epoch = "EPOCH",
    Leet = "LEET"
}
export declare class RequestOAuthApprovalsRequest extends SpeakeasyBase {
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
    /**
     * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
     */
    xSdsDateFormat?: RequestOAuthApprovalsXSdsDateFormatEnum;
    /**
     * Sort string
     */
    sort?: string;
}
export declare class RequestOAuthApprovalsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    oAuthApprovals?: shared.OAuthApproval[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}

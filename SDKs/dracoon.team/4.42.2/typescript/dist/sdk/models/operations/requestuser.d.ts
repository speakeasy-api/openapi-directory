import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
 */
export declare enum RequestUserXSdsDateFormatEnum {
    Utc = "UTC",
    Local = "LOCAL",
    Offset = "OFFSET",
    Epoch = "EPOCH",
    Leet = "LEET"
}
export declare class RequestUserRequest extends SpeakeasyBase {
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
    /**
     * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
     */
    xSdsDateFormat?: RequestUserXSdsDateFormatEnum;
    /**
     * Filter users with DIRECT or DIRECT **AND** EFFECTIVE roles.
     *
     * @remarks
     *
     * * `false`: DIRECT roles
     *
     * * `true`: DIRECT **AND** EFFECTIVE roles
     *
     * DIRECT means: e.g. user gets role **directly** granted from someone with _grant permission_ right.
     *
     * EFFECTIVE means: e.g. user gets role through **group membership**.
     */
    effectiveRoles?: boolean;
    /**
     * User ID
     */
    userId: number;
}
export declare class RequestUserResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    userData?: shared.UserData;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RequestOpenIdAuthInfoRequest extends SpeakeasyBase {
    /**
     * Show only global available items
     */
    isGlobalAvailable?: boolean;
}
export declare class RequestOpenIdAuthInfoResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    openIdAuthInfo?: shared.OpenIdAuthInfo;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RequestOpenIdIdpConfigRequest extends SpeakeasyBase {
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
    /**
     * OpenID Connect IDP configuration ID
     */
    idpId: number;
}
export declare class RequestOpenIdIdpConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    openIdIdpConfig?: shared.OpenIdIdpConfig;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RequestOpenIdIdpConfigsRequest extends SpeakeasyBase {
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
}
export declare class RequestOpenIdIdpConfigsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    openIdIdpConfigs?: shared.OpenIdIdpConfig[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}

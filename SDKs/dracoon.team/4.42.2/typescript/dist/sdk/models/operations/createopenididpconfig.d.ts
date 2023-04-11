import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateOpenIdIdpConfigRequest extends SpeakeasyBase {
    createOpenIdIdpConfigRequest: shared.CreateOpenIdIdpConfigRequest;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
}
export declare class CreateOpenIdIdpConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * Created
     */
    openIdIdpConfig?: shared.OpenIdIdpConfig;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

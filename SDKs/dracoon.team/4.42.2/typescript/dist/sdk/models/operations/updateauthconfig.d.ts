import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateAuthConfigRequest extends SpeakeasyBase {
    authConfig: shared.AuthConfig;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
}
export declare class UpdateAuthConfigResponse extends SpeakeasyBase {
    /**
     * OK
     */
    authConfig?: shared.AuthConfig;
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

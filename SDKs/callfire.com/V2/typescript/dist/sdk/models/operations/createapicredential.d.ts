import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateApiCredentialSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateApiCredentialResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    apiCredential?: shared.ApiCredential;
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

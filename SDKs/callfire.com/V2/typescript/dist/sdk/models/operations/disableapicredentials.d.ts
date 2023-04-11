import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DisableApiCredentialsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DisableApiCredentialsRequest extends SpeakeasyBase {
    /**
     * An id of an API credential
     */
    id: number;
}
export declare class DisableApiCredentialsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

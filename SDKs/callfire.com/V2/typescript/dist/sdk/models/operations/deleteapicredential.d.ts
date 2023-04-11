import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteApiCredentialSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteApiCredentialRequest extends SpeakeasyBase {
    /**
     * An id of an API credential
     */
    id: number;
}
export declare class DeleteApiCredentialResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostGetTerminalsUnderAccountSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class PostGetTerminalsUnderAccountResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK - the request has succeeded.
     */
    getTerminalsUnderAccountResponse?: shared.GetTerminalsUnderAccountResponse;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    serviceError?: shared.ServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

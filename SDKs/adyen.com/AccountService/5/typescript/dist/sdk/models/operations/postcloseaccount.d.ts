import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostCloseAccountSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class PostCloseAccountResponse extends SpeakeasyBase {
    /**
     * OK - the request has succeeded.
     */
    closeAccountResponse?: shared.CloseAccountResponse;
    contentType: string;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    serviceError?: shared.ServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostCloseAccountHolderSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class PostCloseAccountHolderResponse extends SpeakeasyBase {
    /**
     * OK - the request has succeeded.
     */
    closeAccountHolderResponse?: shared.CloseAccountHolderResponse;
    contentType: string;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    serviceError?: shared.ServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

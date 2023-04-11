import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostGetStoresUnderAccountSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class PostGetStoresUnderAccountResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK - the request has succeeded.
     */
    getStoresUnderAccountResponse?: shared.GetStoresUnderAccountResponse;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    serviceError?: shared.ServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

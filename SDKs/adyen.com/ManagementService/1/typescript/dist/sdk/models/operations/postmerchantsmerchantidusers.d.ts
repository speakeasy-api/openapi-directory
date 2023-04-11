import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostMerchantsMerchantIdUsersSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class PostMerchantsMerchantIdUsersRequest extends SpeakeasyBase {
    createMerchantUserRequest?: shared.CreateMerchantUserRequest;
    /**
     * Unique identifier of the merchant.
     */
    merchantId: string;
}
export declare class PostMerchantsMerchantIdUsersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK - the request has succeeded.
     */
    createUserResponse?: shared.CreateUserResponse;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    restServiceError?: shared.RestServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

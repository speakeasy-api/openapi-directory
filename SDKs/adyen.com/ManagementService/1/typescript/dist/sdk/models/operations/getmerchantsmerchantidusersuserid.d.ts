import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMerchantsMerchantIdUsersUserIdSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class GetMerchantsMerchantIdUsersUserIdRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the merchant.
     */
    merchantId: string;
    /**
     * Unique identifier of the user.
     */
    userId: string;
}
export declare class GetMerchantsMerchantIdUsersUserIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    restServiceError?: shared.RestServiceError;
    /**
     * OK - the request has succeeded.
     */
    user?: shared.User;
}

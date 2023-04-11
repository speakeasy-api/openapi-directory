import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostMerchantsMerchantIdPayoutSettingsSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class PostMerchantsMerchantIdPayoutSettingsRequest extends SpeakeasyBase {
    payoutSettingsRequest?: shared.PayoutSettingsRequest;
    /**
     * The unique identifier of the merchant account.
     */
    merchantId: string;
}
export declare class PostMerchantsMerchantIdPayoutSettingsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK - the request has succeeded.
     */
    payoutSettings?: shared.PayoutSettings;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    restServiceError?: shared.RestServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

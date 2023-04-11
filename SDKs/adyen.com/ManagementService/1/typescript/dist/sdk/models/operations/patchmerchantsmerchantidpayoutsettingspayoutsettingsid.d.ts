import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchMerchantsMerchantIdPayoutSettingsPayoutSettingsIdSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class PatchMerchantsMerchantIdPayoutSettingsPayoutSettingsIdRequest extends SpeakeasyBase {
    updatePayoutSettingsRequest?: shared.UpdatePayoutSettingsRequest;
    /**
     * The unique identifier of the merchant account.
     */
    merchantId: string;
    /**
     * The unique identifier of the payout setting.
     */
    payoutSettingsId: string;
}
export declare class PatchMerchantsMerchantIdPayoutSettingsPayoutSettingsIdResponse extends SpeakeasyBase {
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

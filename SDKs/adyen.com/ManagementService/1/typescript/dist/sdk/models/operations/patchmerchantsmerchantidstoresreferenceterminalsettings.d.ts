import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchMerchantsMerchantIdStoresReferenceTerminalSettingsSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class PatchMerchantsMerchantIdStoresReferenceTerminalSettingsRequest extends SpeakeasyBase {
    terminalSettings?: shared.TerminalSettings;
    /**
     * The unique identifier of the merchant account.
     */
    merchantId: string;
    /**
     * The reference that identifies the store.
     */
    reference: string;
}
export declare class PatchMerchantsMerchantIdStoresReferenceTerminalSettingsResponse extends SpeakeasyBase {
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
    terminalSettings?: shared.TerminalSettings;
}

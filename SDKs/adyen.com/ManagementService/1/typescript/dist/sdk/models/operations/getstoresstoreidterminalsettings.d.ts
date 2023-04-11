import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetStoresStoreIdTerminalSettingsSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class GetStoresStoreIdTerminalSettingsRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the store.
     */
    storeId: string;
}
export declare class GetStoresStoreIdTerminalSettingsResponse extends SpeakeasyBase {
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

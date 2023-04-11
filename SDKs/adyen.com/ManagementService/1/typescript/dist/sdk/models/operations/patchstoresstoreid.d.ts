import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchStoresStoreIdSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class PatchStoresStoreIdRequest extends SpeakeasyBase {
    updateStoreRequest?: shared.UpdateStoreRequest;
    /**
     * The unique identifier of the store.
     */
    storeId: string;
}
export declare class PatchStoresStoreIdResponse extends SpeakeasyBase {
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
    store?: shared.Store;
}

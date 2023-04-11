import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ShareStoreRequest extends SpeakeasyBase {
    /**
     * Your friend's email
     */
    requestBody: string;
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class ShareStoreResponse extends SpeakeasyBase {
    /**
     * Only the owner of the store can make this operation or user not found
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Free offer is not allowed to share store.
     */
    errorResponseMessagePaymentRequired?: shared.ErrorResponseMessagePaymentRequired;
}

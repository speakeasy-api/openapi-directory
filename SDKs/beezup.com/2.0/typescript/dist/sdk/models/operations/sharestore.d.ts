import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ShareStorePathParams extends SpeakeasyBase {
    storeId: string;
}
export declare class ShareStoreRequest extends SpeakeasyBase {
    pathParams: ShareStorePathParams;
    request: string;
}
export declare class ShareStoreResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    errorResponseMessagePaymentRequired?: shared.ErrorResponseMessagePaymentRequired;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateCollectionReserveHandleSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateCollectionReserveHandleRequest extends SpeakeasyBase {
    /**
     * Collection Unique identifier
     */
    collectionId: number;
}
export declare class PrivateCollectionReserveHandleResponse extends SpeakeasyBase {
    /**
     * OK
     */
    collectionHandle?: shared.CollectionHandle;
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

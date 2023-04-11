import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateCollectionReserveDoiSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateCollectionReserveDoiRequest extends SpeakeasyBase {
    /**
     * Collection Unique identifier
     */
    collectionId: number;
}
export declare class PrivateCollectionReserveDoiResponse extends SpeakeasyBase {
    /**
     * OK
     */
    collectionDOI?: shared.CollectionDOI;
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

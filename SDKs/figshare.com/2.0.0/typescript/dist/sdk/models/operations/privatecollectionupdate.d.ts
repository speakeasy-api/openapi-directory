import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateCollectionUpdateSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateCollectionUpdateRequest extends SpeakeasyBase {
    /**
     * Collection description
     */
    collectionUpdate: shared.CollectionUpdate;
    /**
     * Collection Unique identifier
     */
    collectionId: number;
}
export declare class PrivateCollectionUpdateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    headers?: Record<string, string[]>;
    /**
     * Reset Content
     */
    locationWarningsUpdate?: shared.LocationWarningsUpdate;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

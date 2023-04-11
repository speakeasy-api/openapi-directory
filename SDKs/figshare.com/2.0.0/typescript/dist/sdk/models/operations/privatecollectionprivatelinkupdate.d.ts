import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateCollectionPrivateLinkUpdateSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateCollectionPrivateLinkUpdateRequest extends SpeakeasyBase {
    collectionPrivateLinkCreator?: shared.CollectionPrivateLinkCreator;
    /**
     * Collection unique identifier
     */
    collectionId: number;
    /**
     * Private link token
     */
    linkId: string;
}
export declare class PrivateCollectionPrivateLinkUpdateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

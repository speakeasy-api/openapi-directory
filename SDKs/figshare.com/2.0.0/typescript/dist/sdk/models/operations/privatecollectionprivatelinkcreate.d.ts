import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateCollectionPrivateLinkCreateSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateCollectionPrivateLinkCreateRequest extends SpeakeasyBase {
    collectionPrivateLinkCreator?: shared.CollectionPrivateLinkCreator;
    /**
     * Collection unique identifier
     */
    collectionId: number;
}
export declare class PrivateCollectionPrivateLinkCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    headers?: Record<string, string[]>;
    /**
     * Created
     */
    privateLinkResponse?: shared.PrivateLinkResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

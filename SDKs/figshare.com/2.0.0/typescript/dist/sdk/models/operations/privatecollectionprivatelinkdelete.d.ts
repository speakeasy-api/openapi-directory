import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateCollectionPrivateLinkDeleteSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateCollectionPrivateLinkDeleteRequest extends SpeakeasyBase {
    /**
     * Collection unique identifier
     */
    collectionId: number;
    /**
     * Private link token
     */
    linkId: string;
}
export declare class PrivateCollectionPrivateLinkDeleteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

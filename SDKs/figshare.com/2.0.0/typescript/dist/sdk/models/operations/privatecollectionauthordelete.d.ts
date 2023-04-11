import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateCollectionAuthorDeleteSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateCollectionAuthorDeleteRequest extends SpeakeasyBase {
    /**
     * Collection Author unique identifier
     */
    authorId: number;
    /**
     * Collection unique identifier
     */
    collectionId: number;
}
export declare class PrivateCollectionAuthorDeleteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

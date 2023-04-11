import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateCollectionAuthorsAddSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateCollectionAuthorsAddRequest extends SpeakeasyBase {
    /**
     * List of authors
     */
    authorsCreator: shared.AuthorsCreator;
    /**
     * Collection unique identifier
     */
    collectionId: number;
}
export declare class PrivateCollectionAuthorsAddResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    headers?: Record<string, string[]>;
    /**
     * Reset Content
     */
    location?: shared.Location;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

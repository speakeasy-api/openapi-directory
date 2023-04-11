import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateCollectionAuthorsReplaceSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateCollectionAuthorsReplaceRequest extends SpeakeasyBase {
    /**
     * List of authors
     */
    authorsCreator: shared.AuthorsCreator;
    /**
     * Collection unique identifier
     */
    collectionId: number;
}
export declare class PrivateCollectionAuthorsReplaceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

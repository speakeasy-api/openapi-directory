import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateCollectionAuthorsListSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateCollectionAuthorsListRequest extends SpeakeasyBase {
    /**
     * Collection unique identifier
     */
    collectionId: number;
}
export declare class PrivateCollectionAuthorsListResponse extends SpeakeasyBase {
    /**
     * OK. Embargo for article
     */
    authors?: shared.Author[];
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

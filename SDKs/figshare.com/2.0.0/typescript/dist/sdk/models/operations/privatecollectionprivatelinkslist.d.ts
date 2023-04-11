import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateCollectionPrivateLinksListSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateCollectionPrivateLinksListRequest extends SpeakeasyBase {
    /**
     * Collection unique identifier
     */
    collectionId: number;
}
export declare class PrivateCollectionPrivateLinksListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    /**
     * OK. Collection private links
     */
    privateLinks?: shared.PrivateLink[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}

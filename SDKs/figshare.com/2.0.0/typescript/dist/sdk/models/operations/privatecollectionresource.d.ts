import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateCollectionResourceSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateCollectionResourceRequest extends SpeakeasyBase {
    /**
     * Resource data
     */
    resource: shared.Resource;
    /**
     * Collection unique identifier
     */
    collectionId: number;
}
export declare class PrivateCollectionResourceResponse extends SpeakeasyBase {
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

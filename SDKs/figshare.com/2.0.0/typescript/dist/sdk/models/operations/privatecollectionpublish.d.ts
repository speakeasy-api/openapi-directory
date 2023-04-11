import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateCollectionPublishSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateCollectionPublishRequest extends SpeakeasyBase {
    /**
     * Collection Unique identifier
     */
    collectionId: number;
}
export declare class PrivateCollectionPublishResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    headers?: Record<string, string[]>;
    /**
     * Created
     */
    location?: shared.Location;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

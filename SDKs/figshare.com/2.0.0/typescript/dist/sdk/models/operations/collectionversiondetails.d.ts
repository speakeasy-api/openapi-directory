import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CollectionVersionDetailsRequest extends SpeakeasyBase {
    /**
     * Collection Unique identifier
     */
    collectionId: number;
    /**
     * Version Number
     */
    versionId: number;
}
export declare class CollectionVersionDetailsResponse extends SpeakeasyBase {
    /**
     * OK. Collection for that version
     */
    collectionComplete?: shared.CollectionComplete;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

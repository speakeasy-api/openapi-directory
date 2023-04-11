import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CollectionDetailsRequest extends SpeakeasyBase {
    /**
     * Collection Unique identifier
     */
    collectionId: number;
}
export declare class CollectionDetailsResponse extends SpeakeasyBase {
    /**
     * OK. Collection representation
     */
    collectionComplete?: shared.CollectionComplete;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

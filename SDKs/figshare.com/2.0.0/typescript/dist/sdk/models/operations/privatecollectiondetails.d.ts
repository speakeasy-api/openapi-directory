import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateCollectionDetailsSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateCollectionDetailsRequest extends SpeakeasyBase {
    /**
     * Collection Unique identifier
     */
    collectionId: number;
}
export declare class PrivateCollectionDetailsResponse extends SpeakeasyBase {
    /**
     * OK. Collection representation
     */
    collectionCompletePrivate?: shared.CollectionCompletePrivate;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

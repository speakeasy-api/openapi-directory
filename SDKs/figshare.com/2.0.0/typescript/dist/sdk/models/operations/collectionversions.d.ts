import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CollectionVersionsRequest extends SpeakeasyBase {
    /**
     * Collection Unique identifier
     */
    collectionId: number;
}
export declare class CollectionVersionsResponse extends SpeakeasyBase {
    /**
     * OK. An array of versions
     */
    collectionVersions?: shared.CollectionVersions[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

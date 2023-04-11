import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CollectionsSearchRequest extends SpeakeasyBase {
    /**
     * Search Parameters
     */
    collectionSearch?: shared.CollectionSearch;
    /**
     * Unique hash used for bypassing the item retrieval limit of 9,000 entities. When using this parameter, please note that the offset parameter will not be available, but the limit parameter will still work as expected.
     */
    xCursor?: string;
}
export declare class CollectionsSearchResponse extends SpeakeasyBase {
    /**
     * OK. An array of collections
     */
    collections?: shared.Collection[];
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

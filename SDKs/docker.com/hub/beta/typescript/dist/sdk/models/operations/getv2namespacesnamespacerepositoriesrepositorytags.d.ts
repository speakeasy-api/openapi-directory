import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetV2NamespacesNamespaceRepositoriesRepositoryTagsRequest extends SpeakeasyBase {
    namespace: string;
    /**
     * Page number to get. Defaults to 1.
     */
    page?: number;
    /**
     * Number of items to get per page. Defaults to 10. Max of 100.
     */
    pageSize?: number;
    repository: string;
}
export declare class GetV2NamespacesNamespaceRepositoriesRepositoryTagsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * list repository tags
     */
    paginatedTags?: shared.PaginatedTags;
}

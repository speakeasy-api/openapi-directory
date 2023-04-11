import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetNamespacesRepositoriesImagesTagsRequest extends SpeakeasyBase {
    /**
     * Digest of the image.
     */
    digest: string;
    /**
     * Namespace of the repository.
     */
    namespace: string;
    /**
     * Page number to get. Defaults to 1.
     */
    page?: number;
    /**
     * Number of images to get per page. Defaults to 10. Max of 100.
     */
    pageSize?: number;
    /**
     * Name of the repository.
     */
    repository: string;
}
export declare class GetNamespacesRepositoriesImagesTagsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized - user does not have read access to the namespace
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * Success
     */
    getNamespaceRepositoryImagesTagsResponse?: shared.GetNamespaceRepositoryImagesTagsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

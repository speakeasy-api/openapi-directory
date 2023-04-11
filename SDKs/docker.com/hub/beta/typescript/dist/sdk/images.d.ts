import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The Advanced Image Management API endpoints allow you to manage Docker
 *
 * @remarks
 * images across all repositories.
 *
 * For more information, see [Advanced Image Management dashboard](https://docs.docker.com/docker-hub/image-management/).
 *
 */
export declare class Images {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get details of repository's images
     *
     * @remarks
     * Gets details on the images in a repository.
     */
    getNamespacesRepositoriesImages(req: operations.GetNamespacesRepositoriesImagesRequest, config?: AxiosRequestConfig): Promise<operations.GetNamespacesRepositoriesImagesResponse>;
    /**
     * Get summary of repository's images
     *
     * @remarks
     * Gets the number of images in a repository and the number of images
     * counted as active and inactive.
     *
     */
    getNamespacesRepositoriesImagesSummary(req: operations.GetNamespacesRepositoriesImagesSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetNamespacesRepositoriesImagesSummaryResponse>;
    /**
     * Get image's tags
     *
     * @remarks
     * Gets current and historical tags for an image.
     */
    getNamespacesRepositoriesImagesTags(req: operations.GetNamespacesRepositoriesImagesTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetNamespacesRepositoriesImagesTagsResponse>;
    /**
     * Delete images
     *
     * @remarks
     * Deletes one or more images within a namespace. This is currently limited to a single
     * repository.
     *
     * If you attempt to delete images that are marked as active or are currently tagged, the deletion does not happen and it displays the warnings.
     * To continue with the deletion, you must ignore these warnings by putting them in the `ignore_warnings` property.
     *
     * Deleting a currently tagged image deletes the tag from the repository.
     *
     * You cannot ignore errors. It is not possible to directly delete children of multi-arch images.
     *
     */
    postNamespacesDeleteImages(req: operations.PostNamespacesDeleteImagesRequest, config?: AxiosRequestConfig): Promise<operations.PostNamespacesDeleteImagesResponse>;
}

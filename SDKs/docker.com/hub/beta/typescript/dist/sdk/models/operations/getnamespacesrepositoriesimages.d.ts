import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Orders the results by this property.
 *
 * @remarks
 *
 * Prefixing with `-` sorts by descending order.
 *
 */
export declare enum GetNamespacesRepositoriesImagesOrderingEnum {
    LastActivity = "last_activity",
    MinusLastActivity = "-last_activity",
    Digest = "digest",
    MinusDigest = "-digest"
}
/**
 * Filters to only show images of this status.
 */
export declare enum GetNamespacesRepositoriesImagesStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
export declare class GetNamespacesRepositoriesImagesRequest extends SpeakeasyBase {
    /**
     * Sets the time from which an image must have been pushed or pulled to
     *
     * @remarks
     * be counted as active.
     *
     * Defaults to 1 month before the current time.
     *
     */
    activeFrom?: string;
    /**
     * Filters to only show images with:
     *
     * @remarks
     * - `true`: at least 1 current tag.
     * - `false`: no current tags.
     *
     */
    currentlyTagged?: boolean;
    /**
     * Namespace of the repository.
     */
    namespace: string;
    /**
     * Orders the results by this property.
     *
     * @remarks
     *
     * Prefixing with `-` sorts by descending order.
     *
     */
    ordering?: GetNamespacesRepositoriesImagesOrderingEnum;
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
    /**
     * Filters to only show images of this status.
     */
    status?: GetNamespacesRepositoriesImagesStatusEnum;
}
export declare class GetNamespacesRepositoriesImagesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized - user does not have read access to the namespace.
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * Success
     */
    getNamespaceRepositoryImagesResponse?: shared.GetNamespaceRepositoryImagesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

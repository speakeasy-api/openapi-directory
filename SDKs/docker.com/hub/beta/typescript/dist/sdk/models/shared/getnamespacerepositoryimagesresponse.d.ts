import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status of the image based on its last activity against the `active_from` time.
 */
export declare enum GetNamespaceRepositoryImagesResponseResultsStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
export declare class GetNamespaceRepositoryImagesResponseResultsTags extends SpeakeasyBase {
    /**
     * `true` if the tag currently points to this image.
     *
     * @remarks
     *
     * `false` if it has been overwritten to point at a different image.
     *
     */
    isCurrent?: boolean;
    /**
     * The tag.
     */
    tag?: string;
}
export declare class GetNamespaceRepositoryImagesResponseResults extends SpeakeasyBase {
    /**
     * The image's digest.
     */
    digest?: string;
    /**
     * Time when this image was last pulled. Note this is updated at most once per hour.
     */
    lastPulled?: string;
    /**
     * Time when this image was last pushed.
     */
    lastPushed?: string;
    /**
     * The repository namespace.
     */
    namespace?: string;
    /**
     * The repository name.
     */
    repository?: string;
    /**
     * The status of the image based on its last activity against the `active_from` time.
     */
    status?: GetNamespaceRepositoryImagesResponseResultsStatusEnum;
    /**
     * The current and historical tags for this image.
     */
    tags?: GetNamespaceRepositoryImagesResponseResultsTags[];
}
/**
 * Paginated list of images in a repository.
 */
export declare class GetNamespaceRepositoryImagesResponse extends SpeakeasyBase {
    /**
     * Total count of images in the repository.
     */
    count?: number;
    /**
     * Link to the next page with the same query parameters if there are more images.
     */
    next?: string;
    /**
     * Link to the previous page with the same query parameters if not on first page.
     */
    previous?: string;
    /**
     * Image details.
     */
    results?: GetNamespaceRepositoryImagesResponseResults[];
}

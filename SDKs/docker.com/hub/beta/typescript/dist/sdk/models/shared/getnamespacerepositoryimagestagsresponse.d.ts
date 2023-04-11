import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNamespaceRepositoryImagesTagsResponseResults extends SpeakeasyBase {
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
/**
 * Paginated list of tags for this repository.
 */
export declare class GetNamespaceRepositoryImagesTagsResponse extends SpeakeasyBase {
    /**
     * Total count of tags for this image.
     */
    count?: number;
    /**
     * Link to the next page if there are more tags.
     */
    next?: string;
    /**
     * Link to the previous page if not on first page.
     */
    previous?: string;
    /**
     * The current and historical tags for this image.
     */
    results?: GetNamespaceRepositoryImagesTagsResponseResults[];
}

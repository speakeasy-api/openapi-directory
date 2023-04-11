import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Warning to ignore.
 */
export declare enum PostNamespacesDeleteImagesRequestIgnoreWarningsWarningEnum {
    IsActive = "is_active",
    CurrentTag = "current_tag"
}
export declare class PostNamespacesDeleteImagesRequestIgnoreWarnings extends SpeakeasyBase {
    /**
     * Digest of the image to ignore the warning for.
     */
    digest: string;
    /**
     * Name of the repository of the image to ignore the warning for.
     */
    repository: string;
    /**
     * Current tags to ignore.
     */
    tags?: string[];
    /**
     * Warning to ignore.
     */
    warning: PostNamespacesDeleteImagesRequestIgnoreWarningsWarningEnum;
}
export declare class PostNamespacesDeleteImagesRequestManifests extends SpeakeasyBase {
    /**
     * Digest of the image to delete.
     */
    digest: string;
    /**
     * Name of the repository to delete the image from.
     */
    repository: string;
}
/**
 * Delete images request.
 */
export declare class PostNamespacesDeleteImagesRequest extends SpeakeasyBase {
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
     * If `true` then will check and return errors and unignored warnings for the deletion request but will not delete any images.
     */
    dryRun?: boolean;
    /**
     * Warnings to ignore. If a warning is not ignored then no deletions will happen and the
     *
     * @remarks
     * warning is returned in the response.
     *
     * These warnings include:
     *
     * - is_active: warning when attempting to delete an image that is marked as active.
     * - current_tag: warning when attempting to delete an image that has one or more current
     * tags in the repository.
     *
     * Warnings can be copied from the response to the request.
     *
     */
    ignoreWarnings?: PostNamespacesDeleteImagesRequestIgnoreWarnings[];
    /**
     * Image manifests to delete.
     */
    manifests?: PostNamespacesDeleteImagesRequestManifests[];
}

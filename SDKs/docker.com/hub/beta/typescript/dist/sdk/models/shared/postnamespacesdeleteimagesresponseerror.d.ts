import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Error type.
 */
export declare enum PostNamespacesDeleteImagesResponseErrorErrinfoDetailsErrorsErrorEnum {
    NotFound = "not_found",
    Unauthorized = "unauthorized",
    ChildManifest = "child_manifest"
}
export declare class PostNamespacesDeleteImagesResponseErrorErrinfoDetailsErrors extends SpeakeasyBase {
    /**
     * Digest of the image that caused the error.
     */
    digest?: string;
    /**
     * Error type.
     */
    error?: PostNamespacesDeleteImagesResponseErrorErrinfoDetailsErrorsErrorEnum;
    /**
     * Name of the repository of the image that caused the error.
     */
    repository?: string;
}
/**
 * Warning type.
 */
export declare enum PostNamespacesDeleteImagesResponseErrorErrinfoDetailsWarningsWarningEnum {
    IsActive = "is_active",
    CurrentTag = "current_tag"
}
export declare class PostNamespacesDeleteImagesResponseErrorErrinfoDetailsWarnings extends SpeakeasyBase {
    /**
     * Digest of the image that caused the warning.
     */
    digest?: string;
    /**
     * Name of the repository of the image that caused the warning.
     */
    repository?: string;
    /**
     * Current tags if warning is `current_tag`.
     */
    tags?: string[];
    /**
     * Warning type.
     */
    warning?: PostNamespacesDeleteImagesResponseErrorErrinfoDetailsWarningsWarningEnum;
}
export declare class PostNamespacesDeleteImagesResponseErrorErrinfoDetails extends SpeakeasyBase {
    /**
     * Errors from validating delete request. These cannot be ignored.
     */
    errors?: PostNamespacesDeleteImagesResponseErrorErrinfoDetailsErrors[];
    /**
     * Warnings that can be ignored.
     *
     * @remarks
     *
     * These warnings include:
     *
     * - is_active: warning when attempting to delete an image that is marked as
     * active.
     * - current_tag: warning when attempting to delete an image that has one or
     * more current tags in the repository.
     *
     * Warnings can be copied from the response to the request.
     *
     */
    warnings?: PostNamespacesDeleteImagesResponseErrorErrinfoDetailsWarnings[];
}
/**
 * Context information for an error used for diagnostics.
 */
export declare class PostNamespacesDeleteImagesResponseErrorErrinfo extends SpeakeasyBase {
    /**
     * ID of docker user.
     */
    apiCallDockerId?: string;
    /**
     * Name of the API operation called.
     */
    apiCallName?: string;
    /**
     * Date/time of call start.
     */
    apiCallStart?: string;
    /**
     * Unique ID for this call.
     */
    apiCallTxnid?: string;
    details?: PostNamespacesDeleteImagesResponseErrorErrinfoDetails;
    /**
     * Type of error.
     */
    type?: string;
}
/**
 * Deletion not possible.
 */
export declare class PostNamespacesDeleteImagesResponseError extends SpeakeasyBase {
    errinfo?: PostNamespacesDeleteImagesResponseErrorErrinfo;
    /**
     * The error message.
     */
    message?: string;
    /**
     * Unique ID for this call.
     */
    txnid?: string;
}

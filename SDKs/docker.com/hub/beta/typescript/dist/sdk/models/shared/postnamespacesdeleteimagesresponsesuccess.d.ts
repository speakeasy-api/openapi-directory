import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostNamespacesDeleteImagesResponseSuccessMetrics extends SpeakeasyBase {
    /**
     * Number of manifests deleted.
     */
    manifestDeletes?: number;
    /**
     * Number of manifests that failed to delete.
     */
    manifestErrors?: number;
    /**
     * Number of tags deleted.
     */
    tagDeletes?: number;
    /**
     * Number of tags that failed to delete.
     */
    tagErrors?: number;
}
/**
 * Successful delete images response.
 */
export declare class PostNamespacesDeleteImagesResponseSuccess extends SpeakeasyBase {
    /**
     * Whether the request was a dry run or not.
     */
    dryRun?: boolean;
    metrics?: PostNamespacesDeleteImagesResponseSuccessMetrics;
}

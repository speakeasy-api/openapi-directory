import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A summary of the number of contributions, media files and approximate total size of media files.
 */
export declare class ExportSummary extends SpeakeasyBase {
    /**
     * The number of contributions selected for export.
     */
    contributions: number;
    /**
     * Human readable estimate of the export size. ie. '10MB'.
     */
    estimatedSize?: string;
    /**
     * The number of media files included in this export.
     */
    media: number;
    /**
     * The expected total size of the media files to be exported.
     */
    totalMediaSize: number;
}

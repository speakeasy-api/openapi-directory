import { SpeakeasyBase } from "../../../internal/utils";
import { FeedTypeEnum } from "./feedtypeenum";
/**
 * Publication feed reporting
 */
export declare class PublicationFeedReporting extends SpeakeasyBase {
    /**
     * Indicates if the publication is completed or not
     */
    completed?: boolean;
    /**
     * The feed publication end time (UTC timezone)
     */
    endUtcDate?: Date;
    /**
     * The error message
     */
    errorMessage?: string;
    /**
     * The product count downloaded from BeezUP Export
     */
    exportedProducts?: number;
    /**
     * The item count (products or offers) the marketplace flagged as failed
     */
    failedItems?: number;
    /**
     * The Feed Type
     */
    feedType: FeedTypeEnum;
    /**
     * The error message if the Html Report generation failed
     */
    htmlReportGenerationErrorMessage?: string;
    /**
     * The Url for the Html Report generated
     */
    htmlReportUrl?: string;
    /**
     * The processing status
     */
    processingStatus: string;
    /**
     * The item count (products or offers) the marketplace flagged as successful
     */
    publishedItems?: number;
    /**
     * The item count (products or offers) the marketplace flagged as successful with warnings
     */
    publishedItemsWithWarning?: number;
    /**
     * The feed publication start time (UTC timezone)
     */
    startUtcDate: Date;
    /**
     * The item count (products or offers) sent to the marketplace
     */
    transmittedItems?: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { FeedTypeEnum } from "./feedtypeenum";
/**
 * Publication feed reporting
**/
export declare class PublicationFeedReporting extends SpeakeasyBase {
    completed?: boolean;
    endUtcDate?: Date;
    errorMessage?: string;
    exportedProducts?: number;
    failedItems?: number;
    feedType: FeedTypeEnum;
    htmlReportGenerationErrorMessage?: string;
    htmlReportUrl?: string;
    processingStatus: string;
    publishedItems?: number;
    publishedItemsWithWarning?: number;
    startUtcDate: Date;
    transmittedItems?: number;
}

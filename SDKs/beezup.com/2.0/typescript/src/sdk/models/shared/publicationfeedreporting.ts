import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FeedTypeEnum } from "./feedtypeenum";



// PublicationFeedReporting
/** 
 * Publication feed reporting
**/
export class PublicationFeedReporting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=completed" })
  completed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=endUtcDate" })
  endUtcDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=exportedProducts" })
  exportedProducts?: number;

  @SpeakeasyMetadata({ data: "json, name=failedItems" })
  failedItems?: number;

  @SpeakeasyMetadata({ data: "json, name=feedType" })
  feedType: FeedTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=htmlReportGenerationErrorMessage" })
  htmlReportGenerationErrorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=htmlReportUrl" })
  htmlReportUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=processingStatus" })
  processingStatus: string;

  @SpeakeasyMetadata({ data: "json, name=publishedItems" })
  publishedItems?: number;

  @SpeakeasyMetadata({ data: "json, name=publishedItemsWithWarning" })
  publishedItemsWithWarning?: number;

  @SpeakeasyMetadata({ data: "json, name=startUtcDate" })
  startUtcDate: Date;

  @SpeakeasyMetadata({ data: "json, name=transmittedItems" })
  transmittedItems?: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderExportationReportingProcessingStatusEnum } from "./orderexportationreportingprocessingstatusenum";
import { SourceTypeEnum } from "./sourcetypeenum";



// OrderExportationReporting
/** 
 * Represent the reporting of the Order report exportations
**/
export class OrderExportationReporting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=abortionUtcDate" })
  abortionUtcDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=beginUtcDate" })
  beginUtcDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=blobNameUri" })
  blobNameUri?: string;

  @SpeakeasyMetadata({ data: "json, name=endUtcDate" })
  endUtcDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=enqueuedUtcDate" })
  enqueuedUtcDate: Date;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=executionUUID" })
  executionUUID: string;

  @SpeakeasyMetadata({ data: "json, name=expirationUtcDate" })
  expirationUtcDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=failureUtcDate" })
  failureUtcDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=ipAddress" })
  ipAddress: string;

  @SpeakeasyMetadata({ data: "json, name=jsonCriteria" })
  jsonCriteria?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdateUtcDate" })
  lastUpdateUtcDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=orderCount" })
  orderCount?: number;

  @SpeakeasyMetadata({ data: "json, name=processingStatus" })
  processingStatus: OrderExportationReportingProcessingStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=remainingOrderCount" })
  remainingOrderCount?: number;

  @SpeakeasyMetadata({ data: "json, name=resumedUtcDate" })
  resumedUtcDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=sourceType" })
  sourceType: SourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=sourceUserId" })
  sourceUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceUserName" })
  sourceUserName: string;

  @SpeakeasyMetadata({ data: "json, name=suspendedUtcDate" })
  suspendedUtcDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=timeoutDuration" })
  timeoutDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=warningMessage" })
  warningMessage?: string;
}

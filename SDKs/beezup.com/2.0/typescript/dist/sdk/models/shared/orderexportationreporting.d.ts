import { SpeakeasyBase } from "../../../internal/utils";
import { OrderExportationReportingProcessingStatusEnum } from "./orderexportationreportingprocessingstatusenum";
import { SourceTypeEnum } from "./sourcetypeenum";
/**
 * Represent the reporting of the Order report exportations
**/
export declare class OrderExportationReporting extends SpeakeasyBase {
    abortionUtcDate?: Date;
    beginUtcDate?: Date;
    blobNameUri?: string;
    endUtcDate?: Date;
    enqueuedUtcDate: Date;
    errorMessage?: string;
    executionUUID: string;
    expirationUtcDate?: Date;
    failureUtcDate?: Date;
    ipAddress: string;
    jsonCriteria?: string;
    lastUpdateUtcDate?: Date;
    orderCount?: number;
    processingStatus: OrderExportationReportingProcessingStatusEnum;
    remainingOrderCount?: number;
    resumedUtcDate?: Date;
    sourceType: SourceTypeEnum;
    sourceUserId?: string;
    sourceUserName: string;
    suspendedUtcDate?: Date;
    timeoutDuration?: string;
    warningMessage?: string;
}

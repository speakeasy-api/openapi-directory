import { SpeakeasyBase } from "../../../internal/utils";
import { OrderExportationReportingProcessingStatusEnum } from "./orderexportationreportingprocessingstatusenum";
import { SourceTypeEnum } from "./sourcetypeenum";
/**
 * Represent the reporting of the Order report exportations
 */
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
    /**
     * Raw representation of the JSON
     */
    jsonCriteria?: string;
    lastUpdateUtcDate?: Date;
    orderCount?: number;
    processingStatus: OrderExportationReportingProcessingStatusEnum;
    remainingOrderCount?: number;
    resumedUtcDate?: Date;
    /**
     * Indicates the origin of the operation
     */
    sourceType: SourceTypeEnum;
    /**
     * The user identifier
     */
    sourceUserId?: string;
    sourceUserName: string;
    suspendedUtcDate?: Date;
    timeoutDuration?: string;
    warningMessage?: string;
}

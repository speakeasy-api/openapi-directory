import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ExportTableToPointInTimeXAmzTargetEnum {
    DynamoDB20120810ExportTableToPointInTime = "DynamoDB_20120810.ExportTableToPointInTime"
}
export declare class ExportTableToPointInTimeRequest extends SpeakeasyBase {
    exportTableToPointInTimeInput: shared.ExportTableToPointInTimeInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ExportTableToPointInTimeXAmzTargetEnum;
}
export declare class ExportTableToPointInTimeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ExportConflictException
     */
    exportConflictException?: any;
    /**
     * Success
     */
    exportTableToPointInTimeOutput?: shared.ExportTableToPointInTimeOutput;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidExportTimeException
     */
    invalidExportTimeException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * PointInTimeRecoveryUnavailableException
     */
    pointInTimeRecoveryUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TableNotFoundException
     */
    tableNotFoundException?: any;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetExportSnapshotRecordsXAmzTargetEnum {
    Lightsail20161128GetExportSnapshotRecords = "Lightsail_20161128.GetExportSnapshotRecords"
}
export declare class GetExportSnapshotRecordsRequest extends SpeakeasyBase {
    getExportSnapshotRecordsRequest: shared.GetExportSnapshotRecordsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetExportSnapshotRecordsXAmzTargetEnum;
}
export declare class GetExportSnapshotRecordsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * AccountSetupInProgressException
     */
    accountSetupInProgressException?: any;
    contentType: string;
    /**
     * Success
     */
    getExportSnapshotRecordsResult?: shared.GetExportSnapshotRecordsResult;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    /**
     * OperationFailureException
     */
    operationFailureException?: any;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthenticatedException
     */
    unauthenticatedException?: any;
}

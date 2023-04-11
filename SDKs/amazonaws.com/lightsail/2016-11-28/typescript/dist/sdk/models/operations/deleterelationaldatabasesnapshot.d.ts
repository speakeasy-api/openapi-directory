import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteRelationalDatabaseSnapshotXAmzTargetEnum {
    Lightsail20161128DeleteRelationalDatabaseSnapshot = "Lightsail_20161128.DeleteRelationalDatabaseSnapshot"
}
export declare class DeleteRelationalDatabaseSnapshotRequest extends SpeakeasyBase {
    deleteRelationalDatabaseSnapshotRequest: shared.DeleteRelationalDatabaseSnapshotRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteRelationalDatabaseSnapshotXAmzTargetEnum;
}
export declare class DeleteRelationalDatabaseSnapshotResponse extends SpeakeasyBase {
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
    deleteRelationalDatabaseSnapshotResult?: shared.DeleteRelationalDatabaseSnapshotResult;
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

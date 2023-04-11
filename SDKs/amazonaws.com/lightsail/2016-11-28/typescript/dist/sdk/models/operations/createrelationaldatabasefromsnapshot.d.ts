import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateRelationalDatabaseFromSnapshotXAmzTargetEnum {
    Lightsail20161128CreateRelationalDatabaseFromSnapshot = "Lightsail_20161128.CreateRelationalDatabaseFromSnapshot"
}
export declare class CreateRelationalDatabaseFromSnapshotRequest extends SpeakeasyBase {
    createRelationalDatabaseFromSnapshotRequest: shared.CreateRelationalDatabaseFromSnapshotRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateRelationalDatabaseFromSnapshotXAmzTargetEnum;
}
export declare class CreateRelationalDatabaseFromSnapshotResponse extends SpeakeasyBase {
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
    createRelationalDatabaseFromSnapshotResult?: shared.CreateRelationalDatabaseFromSnapshotResult;
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

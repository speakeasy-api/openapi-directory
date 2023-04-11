import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateRelationalDatabaseSnapshotXAmzTargetEnum {
    Lightsail20161128CreateRelationalDatabaseSnapshot = "Lightsail_20161128.CreateRelationalDatabaseSnapshot"
}
export declare class CreateRelationalDatabaseSnapshotRequest extends SpeakeasyBase {
    createRelationalDatabaseSnapshotRequest: shared.CreateRelationalDatabaseSnapshotRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateRelationalDatabaseSnapshotXAmzTargetEnum;
}
export declare class CreateRelationalDatabaseSnapshotResponse extends SpeakeasyBase {
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
    createRelationalDatabaseSnapshotResult?: shared.CreateRelationalDatabaseSnapshotResult;
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

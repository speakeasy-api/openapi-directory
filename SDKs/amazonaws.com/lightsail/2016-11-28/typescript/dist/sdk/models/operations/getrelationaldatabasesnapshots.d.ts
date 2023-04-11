import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetRelationalDatabaseSnapshotsXAmzTargetEnum {
    Lightsail20161128GetRelationalDatabaseSnapshots = "Lightsail_20161128.GetRelationalDatabaseSnapshots"
}
export declare class GetRelationalDatabaseSnapshotsRequest extends SpeakeasyBase {
    getRelationalDatabaseSnapshotsRequest: shared.GetRelationalDatabaseSnapshotsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRelationalDatabaseSnapshotsXAmzTargetEnum;
}
export declare class GetRelationalDatabaseSnapshotsResponse extends SpeakeasyBase {
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
    getRelationalDatabaseSnapshotsResult?: shared.GetRelationalDatabaseSnapshotsResult;
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

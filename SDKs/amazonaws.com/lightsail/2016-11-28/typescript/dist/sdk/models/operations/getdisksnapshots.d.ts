import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetDiskSnapshotsXAmzTargetEnum {
    Lightsail20161128GetDiskSnapshots = "Lightsail_20161128.GetDiskSnapshots"
}
export declare class GetDiskSnapshotsRequest extends SpeakeasyBase {
    getDiskSnapshotsRequest: shared.GetDiskSnapshotsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDiskSnapshotsXAmzTargetEnum;
}
export declare class GetDiskSnapshotsResponse extends SpeakeasyBase {
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
    getDiskSnapshotsResult?: shared.GetDiskSnapshotsResult;
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

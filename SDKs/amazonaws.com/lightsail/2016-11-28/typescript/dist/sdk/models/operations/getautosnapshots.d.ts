import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetAutoSnapshotsXAmzTargetEnum {
    Lightsail20161128GetAutoSnapshots = "Lightsail_20161128.GetAutoSnapshots"
}
export declare class GetAutoSnapshotsRequest extends SpeakeasyBase {
    getAutoSnapshotsRequest: shared.GetAutoSnapshotsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAutoSnapshotsXAmzTargetEnum;
}
export declare class GetAutoSnapshotsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getAutoSnapshotsResult?: shared.GetAutoSnapshotsResult;
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

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RemovePermissionXAmzTargetEnum {
    AWSEventsRemovePermission = "AWSEvents.RemovePermission"
}
export declare class RemovePermissionRequest extends SpeakeasyBase {
    removePermissionRequest: shared.RemovePermissionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RemovePermissionXAmzTargetEnum;
}
export declare class RemovePermissionResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * OperationDisabledException
     */
    operationDisabledException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

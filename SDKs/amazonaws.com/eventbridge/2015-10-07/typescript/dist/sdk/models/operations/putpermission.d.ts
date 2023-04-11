import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutPermissionXAmzTargetEnum {
    AWSEventsPutPermission = "AWSEvents.PutPermission"
}
export declare class PutPermissionRequest extends SpeakeasyBase {
    putPermissionRequest: shared.PutPermissionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutPermissionXAmzTargetEnum;
}
export declare class PutPermissionResponse extends SpeakeasyBase {
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
     * PolicyLengthExceededException
     */
    policyLengthExceededException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

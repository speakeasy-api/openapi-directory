import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateProtectionGroupXAmzTargetEnum {
    AWSShield20160616CreateProtectionGroup = "AWSShield_20160616.CreateProtectionGroup"
}
export declare class CreateProtectionGroupRequest extends SpeakeasyBase {
    createProtectionGroupRequest: shared.CreateProtectionGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateProtectionGroupXAmzTargetEnum;
}
export declare class CreateProtectionGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createProtectionGroupResponse?: Record<string, any>;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * LimitsExceededException
     */
    limitsExceededException?: any;
    /**
     * OptimisticLockException
     */
    optimisticLockException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}

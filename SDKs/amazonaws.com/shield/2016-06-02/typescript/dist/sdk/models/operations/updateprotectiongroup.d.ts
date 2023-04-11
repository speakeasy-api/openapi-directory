import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateProtectionGroupXAmzTargetEnum {
    AWSShield20160616UpdateProtectionGroup = "AWSShield_20160616.UpdateProtectionGroup"
}
export declare class UpdateProtectionGroupRequest extends SpeakeasyBase {
    updateProtectionGroupRequest: shared.UpdateProtectionGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateProtectionGroupXAmzTargetEnum;
}
export declare class UpdateProtectionGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * OptimisticLockException
     */
    optimisticLockException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateProtectionGroupResponse?: Record<string, any>;
}

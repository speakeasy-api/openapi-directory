import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteProtectionGroupXAmzTargetEnum {
    AWSShield20160616DeleteProtectionGroup = "AWSShield_20160616.DeleteProtectionGroup"
}
export declare class DeleteProtectionGroupRequest extends SpeakeasyBase {
    deleteProtectionGroupRequest: shared.DeleteProtectionGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteProtectionGroupXAmzTargetEnum;
}
export declare class DeleteProtectionGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteProtectionGroupResponse?: Record<string, any>;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * OptimisticLockException
     */
    optimisticLockException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}

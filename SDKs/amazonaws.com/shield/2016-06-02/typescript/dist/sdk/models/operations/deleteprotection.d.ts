import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteProtectionXAmzTargetEnum {
    AWSShield20160616DeleteProtection = "AWSShield_20160616.DeleteProtection"
}
export declare class DeleteProtectionRequest extends SpeakeasyBase {
    deleteProtectionRequest: shared.DeleteProtectionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteProtectionXAmzTargetEnum;
}
export declare class DeleteProtectionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteProtectionResponse?: Record<string, any>;
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

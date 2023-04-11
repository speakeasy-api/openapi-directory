import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateProtectionXAmzTargetEnum {
    AWSShield20160616CreateProtection = "AWSShield_20160616.CreateProtection"
}
export declare class CreateProtectionRequest extends SpeakeasyBase {
    createProtectionRequest: shared.CreateProtectionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateProtectionXAmzTargetEnum;
}
export declare class CreateProtectionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createProtectionResponse?: shared.CreateProtectionResponse;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidOperationException
     */
    invalidOperationException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * InvalidResourceException
     */
    invalidResourceException?: any;
    /**
     * LimitsExceededException
     */
    limitsExceededException?: any;
    /**
     * OptimisticLockException
     */
    optimisticLockException?: any;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssociateHealthCheckXAmzTargetEnum {
    AWSShield20160616AssociateHealthCheck = "AWSShield_20160616.AssociateHealthCheck"
}
export declare class AssociateHealthCheckRequest extends SpeakeasyBase {
    associateHealthCheckRequest: shared.AssociateHealthCheckRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateHealthCheckXAmzTargetEnum;
}
export declare class AssociateHealthCheckResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associateHealthCheckResponse?: Record<string, any>;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}

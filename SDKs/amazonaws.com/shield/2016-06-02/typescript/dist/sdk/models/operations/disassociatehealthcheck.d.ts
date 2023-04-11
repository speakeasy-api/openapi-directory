import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisassociateHealthCheckXAmzTargetEnum {
    AWSShield20160616DisassociateHealthCheck = "AWSShield_20160616.DisassociateHealthCheck"
}
export declare class DisassociateHealthCheckRequest extends SpeakeasyBase {
    disassociateHealthCheckRequest: shared.DisassociateHealthCheckRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateHealthCheckXAmzTargetEnum;
}
export declare class DisassociateHealthCheckResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    disassociateHealthCheckResponse?: Record<string, any>;
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

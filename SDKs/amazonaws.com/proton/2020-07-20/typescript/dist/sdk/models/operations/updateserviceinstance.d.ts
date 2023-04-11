import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateServiceInstanceXAmzTargetEnum {
    AwsProton20200720UpdateServiceInstance = "AwsProton20200720.UpdateServiceInstance"
}
export declare class UpdateServiceInstanceRequest extends SpeakeasyBase {
    updateServiceInstanceInput: shared.UpdateServiceInstanceInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateServiceInstanceXAmzTargetEnum;
}
export declare class UpdateServiceInstanceResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateServiceInstanceOutput?: shared.UpdateServiceInstanceOutput;
    /**
     * ValidationException
     */
    validationException?: any;
}

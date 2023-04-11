import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateServicePipelineXAmzTargetEnum {
    AwsProton20200720UpdateServicePipeline = "AwsProton20200720.UpdateServicePipeline"
}
export declare class UpdateServicePipelineRequest extends SpeakeasyBase {
    updateServicePipelineInput: shared.UpdateServicePipelineInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateServicePipelineXAmzTargetEnum;
}
export declare class UpdateServicePipelineResponse extends SpeakeasyBase {
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
    updateServicePipelineOutput?: shared.UpdateServicePipelineOutput;
    /**
     * ValidationException
     */
    validationException?: any;
}

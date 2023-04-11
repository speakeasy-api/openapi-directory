import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CancelServicePipelineDeploymentXAmzTargetEnum {
    AwsProton20200720CancelServicePipelineDeployment = "AwsProton20200720.CancelServicePipelineDeployment"
}
export declare class CancelServicePipelineDeploymentRequest extends SpeakeasyBase {
    cancelServicePipelineDeploymentInput: shared.CancelServicePipelineDeploymentInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CancelServicePipelineDeploymentXAmzTargetEnum;
}
export declare class CancelServicePipelineDeploymentResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    cancelServicePipelineDeploymentOutput?: shared.CancelServicePipelineDeploymentOutput;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}

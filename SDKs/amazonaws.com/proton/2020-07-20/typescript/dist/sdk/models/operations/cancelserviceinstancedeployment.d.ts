import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CancelServiceInstanceDeploymentXAmzTargetEnum {
    AwsProton20200720CancelServiceInstanceDeployment = "AwsProton20200720.CancelServiceInstanceDeployment"
}
export declare class CancelServiceInstanceDeploymentRequest extends SpeakeasyBase {
    cancelServiceInstanceDeploymentInput: shared.CancelServiceInstanceDeploymentInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CancelServiceInstanceDeploymentXAmzTargetEnum;
}
export declare class CancelServiceInstanceDeploymentResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    cancelServiceInstanceDeploymentOutput?: shared.CancelServiceInstanceDeploymentOutput;
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

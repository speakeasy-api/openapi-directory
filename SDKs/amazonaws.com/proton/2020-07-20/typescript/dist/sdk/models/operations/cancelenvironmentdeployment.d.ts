import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CancelEnvironmentDeploymentXAmzTargetEnum {
    AwsProton20200720CancelEnvironmentDeployment = "AwsProton20200720.CancelEnvironmentDeployment"
}
export declare class CancelEnvironmentDeploymentRequest extends SpeakeasyBase {
    cancelEnvironmentDeploymentInput: shared.CancelEnvironmentDeploymentInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CancelEnvironmentDeploymentXAmzTargetEnum;
}
export declare class CancelEnvironmentDeploymentResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    cancelEnvironmentDeploymentOutput?: shared.CancelEnvironmentDeploymentOutput;
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

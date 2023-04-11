import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartDeploymentXAmzTargetEnum {
    AppRunnerStartDeployment = "AppRunner.StartDeployment"
}
export declare class StartDeploymentRequest extends SpeakeasyBase {
    startDeploymentRequest: shared.StartDeploymentRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartDeploymentXAmzTargetEnum;
}
export declare class StartDeploymentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServiceErrorException
     */
    internalServiceErrorException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    startDeploymentResponse?: shared.StartDeploymentResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

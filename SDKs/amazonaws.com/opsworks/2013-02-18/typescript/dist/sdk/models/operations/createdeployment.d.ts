import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateDeploymentXAmzTargetEnum {
    OpsWorks20130218CreateDeployment = "OpsWorks_20130218.CreateDeployment"
}
export declare class CreateDeploymentRequest extends SpeakeasyBase {
    createDeploymentRequest: shared.CreateDeploymentRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDeploymentXAmzTargetEnum;
}
export declare class CreateDeploymentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createDeploymentResult?: shared.CreateDeploymentResult;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}

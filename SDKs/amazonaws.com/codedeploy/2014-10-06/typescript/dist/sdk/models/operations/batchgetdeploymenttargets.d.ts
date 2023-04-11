import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchGetDeploymentTargetsXAmzTargetEnum {
    CodeDeploy20141006BatchGetDeploymentTargets = "CodeDeploy_20141006.BatchGetDeploymentTargets"
}
export declare class BatchGetDeploymentTargetsRequest extends SpeakeasyBase {
    batchGetDeploymentTargetsInput: shared.BatchGetDeploymentTargetsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetDeploymentTargetsXAmzTargetEnum;
}
export declare class BatchGetDeploymentTargetsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchGetDeploymentTargetsOutput?: shared.BatchGetDeploymentTargetsOutput;
    contentType: string;
    /**
     * DeploymentDoesNotExistException
     */
    deploymentDoesNotExistException?: any;
    /**
     * DeploymentIdRequiredException
     */
    deploymentIdRequiredException?: any;
    /**
     * DeploymentNotStartedException
     */
    deploymentNotStartedException?: any;
    /**
     * DeploymentTargetDoesNotExistException
     */
    deploymentTargetDoesNotExistException?: any;
    /**
     * DeploymentTargetIdRequiredException
     */
    deploymentTargetIdRequiredException?: any;
    /**
     * DeploymentTargetListSizeExceededException
     */
    deploymentTargetListSizeExceededException?: any;
    /**
     * InstanceDoesNotExistException
     */
    instanceDoesNotExistException?: any;
    /**
     * InvalidDeploymentIdException
     */
    invalidDeploymentIdException?: any;
    /**
     * InvalidDeploymentTargetIdException
     */
    invalidDeploymentTargetIdException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

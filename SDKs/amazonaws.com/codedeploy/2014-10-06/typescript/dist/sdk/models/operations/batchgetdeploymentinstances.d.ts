import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchGetDeploymentInstancesXAmzTargetEnum {
    CodeDeploy20141006BatchGetDeploymentInstances = "CodeDeploy_20141006.BatchGetDeploymentInstances"
}
export declare class BatchGetDeploymentInstancesRequest extends SpeakeasyBase {
    batchGetDeploymentInstancesInput: shared.BatchGetDeploymentInstancesInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetDeploymentInstancesXAmzTargetEnum;
}
export declare class BatchGetDeploymentInstancesResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchGetDeploymentInstancesOutput?: shared.BatchGetDeploymentInstancesOutput;
    /**
     * BatchLimitExceededException
     */
    batchLimitExceededException?: any;
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
     * InstanceIdRequiredException
     */
    instanceIdRequiredException?: any;
    /**
     * InvalidComputePlatformException
     */
    invalidComputePlatformException?: any;
    /**
     * InvalidDeploymentIdException
     */
    invalidDeploymentIdException?: any;
    /**
     * InvalidInstanceNameException
     */
    invalidInstanceNameException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

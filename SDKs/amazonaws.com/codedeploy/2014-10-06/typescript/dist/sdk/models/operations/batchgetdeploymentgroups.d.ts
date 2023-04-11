import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchGetDeploymentGroupsXAmzTargetEnum {
    CodeDeploy20141006BatchGetDeploymentGroups = "CodeDeploy_20141006.BatchGetDeploymentGroups"
}
export declare class BatchGetDeploymentGroupsRequest extends SpeakeasyBase {
    batchGetDeploymentGroupsInput: shared.BatchGetDeploymentGroupsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetDeploymentGroupsXAmzTargetEnum;
}
export declare class BatchGetDeploymentGroupsResponse extends SpeakeasyBase {
    /**
     * ApplicationDoesNotExistException
     */
    applicationDoesNotExistException?: any;
    /**
     * ApplicationNameRequiredException
     */
    applicationNameRequiredException?: any;
    /**
     * Success
     */
    batchGetDeploymentGroupsOutput?: shared.BatchGetDeploymentGroupsOutput;
    /**
     * BatchLimitExceededException
     */
    batchLimitExceededException?: any;
    contentType: string;
    /**
     * DeploymentConfigDoesNotExistException
     */
    deploymentConfigDoesNotExistException?: any;
    /**
     * DeploymentGroupNameRequiredException
     */
    deploymentGroupNameRequiredException?: any;
    /**
     * InvalidApplicationNameException
     */
    invalidApplicationNameException?: any;
    /**
     * InvalidDeploymentGroupNameException
     */
    invalidDeploymentGroupNameException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

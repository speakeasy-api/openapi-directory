import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchGetDeploymentsXAmzTargetEnum {
    CodeDeploy20141006BatchGetDeployments = "CodeDeploy_20141006.BatchGetDeployments"
}
export declare class BatchGetDeploymentsRequest extends SpeakeasyBase {
    batchGetDeploymentsInput: shared.BatchGetDeploymentsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetDeploymentsXAmzTargetEnum;
}
export declare class BatchGetDeploymentsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchGetDeploymentsOutput?: shared.BatchGetDeploymentsOutput;
    /**
     * BatchLimitExceededException
     */
    batchLimitExceededException?: any;
    contentType: string;
    /**
     * DeploymentIdRequiredException
     */
    deploymentIdRequiredException?: any;
    /**
     * InvalidDeploymentIdException
     */
    invalidDeploymentIdException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

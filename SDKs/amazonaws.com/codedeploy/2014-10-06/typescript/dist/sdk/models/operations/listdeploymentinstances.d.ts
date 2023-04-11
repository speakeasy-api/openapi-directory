import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListDeploymentInstancesXAmzTargetEnum {
    CodeDeploy20141006ListDeploymentInstances = "CodeDeploy_20141006.ListDeploymentInstances"
}
export declare class ListDeploymentInstancesRequest extends SpeakeasyBase {
    listDeploymentInstancesInput: shared.ListDeploymentInstancesInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDeploymentInstancesXAmzTargetEnum;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListDeploymentInstancesResponse extends SpeakeasyBase {
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
     * InvalidComputePlatformException
     */
    invalidComputePlatformException?: any;
    /**
     * InvalidDeploymentIdException
     */
    invalidDeploymentIdException?: any;
    /**
     * InvalidDeploymentInstanceTypeException
     */
    invalidDeploymentInstanceTypeException?: any;
    /**
     * InvalidInstanceStatusException
     */
    invalidInstanceStatusException?: any;
    /**
     * InvalidInstanceTypeException
     */
    invalidInstanceTypeException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * InvalidTargetFilterNameException
     */
    invalidTargetFilterNameException?: any;
    /**
     * Success
     */
    listDeploymentInstancesOutput?: shared.ListDeploymentInstancesOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

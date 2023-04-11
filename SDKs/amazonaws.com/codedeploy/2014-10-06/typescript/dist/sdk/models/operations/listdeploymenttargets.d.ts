import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListDeploymentTargetsXAmzTargetEnum {
    CodeDeploy20141006ListDeploymentTargets = "CodeDeploy_20141006.ListDeploymentTargets"
}
export declare class ListDeploymentTargetsRequest extends SpeakeasyBase {
    listDeploymentTargetsInput: shared.ListDeploymentTargetsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDeploymentTargetsXAmzTargetEnum;
}
export declare class ListDeploymentTargetsResponse extends SpeakeasyBase {
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
     * Success
     */
    listDeploymentTargetsOutput?: shared.ListDeploymentTargetsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

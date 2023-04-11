import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListDeploymentsXAmzTargetEnum {
    CodeDeploy20141006ListDeployments = "CodeDeploy_20141006.ListDeployments"
}
export declare class ListDeploymentsRequest extends SpeakeasyBase {
    listDeploymentsInput: shared.ListDeploymentsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDeploymentsXAmzTargetEnum;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListDeploymentsResponse extends SpeakeasyBase {
    /**
     * ApplicationDoesNotExistException
     */
    applicationDoesNotExistException?: any;
    /**
     * ApplicationNameRequiredException
     */
    applicationNameRequiredException?: any;
    contentType: string;
    /**
     * DeploymentGroupDoesNotExistException
     */
    deploymentGroupDoesNotExistException?: any;
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
    /**
     * InvalidDeploymentStatusException
     */
    invalidDeploymentStatusException?: any;
    /**
     * InvalidExternalIdException
     */
    invalidExternalIdException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * InvalidTimeRangeException
     */
    invalidTimeRangeException?: any;
    /**
     * Success
     */
    listDeploymentsOutput?: shared.ListDeploymentsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

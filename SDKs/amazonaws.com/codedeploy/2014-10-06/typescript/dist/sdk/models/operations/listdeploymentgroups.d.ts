import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListDeploymentGroupsXAmzTargetEnum {
    CodeDeploy20141006ListDeploymentGroups = "CodeDeploy_20141006.ListDeploymentGroups"
}
export declare class ListDeploymentGroupsRequest extends SpeakeasyBase {
    listDeploymentGroupsInput: shared.ListDeploymentGroupsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDeploymentGroupsXAmzTargetEnum;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListDeploymentGroupsResponse extends SpeakeasyBase {
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
     * InvalidApplicationNameException
     */
    invalidApplicationNameException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * Success
     */
    listDeploymentGroupsOutput?: shared.ListDeploymentGroupsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeWorkspacesXAmzTargetEnum {
    WorkspacesServiceDescribeWorkspaces = "WorkspacesService.DescribeWorkspaces"
}
export declare class DescribeWorkspacesRequest extends SpeakeasyBase {
    describeWorkspacesRequest: shared.DescribeWorkspacesRequest;
    /**
     * Pagination limit
     */
    limit?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeWorkspacesXAmzTargetEnum;
}
export declare class DescribeWorkspacesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeWorkspacesResult?: shared.DescribeWorkspacesResult;
    /**
     * InvalidParameterValuesException
     */
    invalidParameterValuesException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceUnavailableException
     */
    resourceUnavailableException?: any;
}

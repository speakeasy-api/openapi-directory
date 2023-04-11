import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeWorkspaceDirectoriesXAmzTargetEnum {
    WorkspacesServiceDescribeWorkspaceDirectories = "WorkspacesService.DescribeWorkspaceDirectories"
}
export declare class DescribeWorkspaceDirectoriesRequest extends SpeakeasyBase {
    describeWorkspaceDirectoriesRequest: shared.DescribeWorkspaceDirectoriesRequest;
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
    xAmzTarget: DescribeWorkspaceDirectoriesXAmzTargetEnum;
}
export declare class DescribeWorkspaceDirectoriesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeWorkspaceDirectoriesResult?: shared.DescribeWorkspaceDirectoriesResult;
    /**
     * InvalidParameterValuesException
     */
    invalidParameterValuesException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

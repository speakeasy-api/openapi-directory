import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeWorkspaceImagePermissionsXAmzTargetEnum {
    WorkspacesServiceDescribeWorkspaceImagePermissions = "WorkspacesService.DescribeWorkspaceImagePermissions"
}
export declare class DescribeWorkspaceImagePermissionsRequest extends SpeakeasyBase {
    describeWorkspaceImagePermissionsRequest: shared.DescribeWorkspaceImagePermissionsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeWorkspaceImagePermissionsXAmzTargetEnum;
}
export declare class DescribeWorkspaceImagePermissionsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeWorkspaceImagePermissionsResult?: shared.DescribeWorkspaceImagePermissionsResult;
    /**
     * InvalidParameterValuesException
     */
    invalidParameterValuesException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

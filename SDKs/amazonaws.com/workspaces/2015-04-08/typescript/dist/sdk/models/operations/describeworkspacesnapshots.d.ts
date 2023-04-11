import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeWorkspaceSnapshotsXAmzTargetEnum {
    WorkspacesServiceDescribeWorkspaceSnapshots = "WorkspacesService.DescribeWorkspaceSnapshots"
}
export declare class DescribeWorkspaceSnapshotsRequest extends SpeakeasyBase {
    describeWorkspaceSnapshotsRequest: shared.DescribeWorkspaceSnapshotsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeWorkspaceSnapshotsXAmzTargetEnum;
}
export declare class DescribeWorkspaceSnapshotsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeWorkspaceSnapshotsResult?: shared.DescribeWorkspaceSnapshotsResult;
    /**
     * InvalidParameterValuesException
     */
    invalidParameterValuesException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}

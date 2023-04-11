import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeWorkspaceImagesXAmzTargetEnum {
    WorkspacesServiceDescribeWorkspaceImages = "WorkspacesService.DescribeWorkspaceImages"
}
export declare class DescribeWorkspaceImagesRequest extends SpeakeasyBase {
    describeWorkspaceImagesRequest: shared.DescribeWorkspaceImagesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeWorkspaceImagesXAmzTargetEnum;
}
export declare class DescribeWorkspaceImagesResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeWorkspaceImagesResult?: shared.DescribeWorkspaceImagesResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

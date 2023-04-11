import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeWorkspaceBundlesXAmzTargetEnum {
    WorkspacesServiceDescribeWorkspaceBundles = "WorkspacesService.DescribeWorkspaceBundles"
}
export declare class DescribeWorkspaceBundlesRequest extends SpeakeasyBase {
    describeWorkspaceBundlesRequest: shared.DescribeWorkspaceBundlesRequest;
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
    xAmzTarget: DescribeWorkspaceBundlesXAmzTargetEnum;
}
export declare class DescribeWorkspaceBundlesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeWorkspaceBundlesResult?: shared.DescribeWorkspaceBundlesResult;
    /**
     * InvalidParameterValuesException
     */
    invalidParameterValuesException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

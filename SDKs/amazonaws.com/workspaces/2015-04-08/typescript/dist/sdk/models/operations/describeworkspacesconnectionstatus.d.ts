import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeWorkspacesConnectionStatusXAmzTargetEnum {
    WorkspacesServiceDescribeWorkspacesConnectionStatus = "WorkspacesService.DescribeWorkspacesConnectionStatus"
}
export declare class DescribeWorkspacesConnectionStatusRequest extends SpeakeasyBase {
    describeWorkspacesConnectionStatusRequest: shared.DescribeWorkspacesConnectionStatusRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeWorkspacesConnectionStatusXAmzTargetEnum;
}
export declare class DescribeWorkspacesConnectionStatusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeWorkspacesConnectionStatusResult?: shared.DescribeWorkspacesConnectionStatusResult;
    /**
     * InvalidParameterValuesException
     */
    invalidParameterValuesException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

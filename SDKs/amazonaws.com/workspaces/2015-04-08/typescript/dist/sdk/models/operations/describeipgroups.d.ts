import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeIpGroupsXAmzTargetEnum {
    WorkspacesServiceDescribeIpGroups = "WorkspacesService.DescribeIpGroups"
}
export declare class DescribeIpGroupsRequest extends SpeakeasyBase {
    describeIpGroupsRequest: shared.DescribeIpGroupsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeIpGroupsXAmzTargetEnum;
}
export declare class DescribeIpGroupsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeIpGroupsResult?: shared.DescribeIpGroupsResult;
    /**
     * InvalidParameterValuesException
     */
    invalidParameterValuesException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

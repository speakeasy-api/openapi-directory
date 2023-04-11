import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeParameterGroupsXAmzTargetEnum {
    AmazonDaxv3DescribeParameterGroups = "AmazonDAXV3.DescribeParameterGroups"
}
export declare class DescribeParameterGroupsRequest extends SpeakeasyBase {
    describeParameterGroupsRequest: shared.DescribeParameterGroupsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeParameterGroupsXAmzTargetEnum;
}
export declare class DescribeParameterGroupsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeParameterGroupsResponse?: shared.DescribeParameterGroupsResponse;
    /**
     * InvalidParameterCombinationException
     */
    invalidParameterCombinationException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * ParameterGroupNotFoundFault
     */
    parameterGroupNotFoundFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceLinkedRoleNotFoundFault
     */
    serviceLinkedRoleNotFoundFault?: any;
}

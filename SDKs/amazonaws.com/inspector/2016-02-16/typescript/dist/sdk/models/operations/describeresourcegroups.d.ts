import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeResourceGroupsXAmzTargetEnum {
    InspectorServiceDescribeResourceGroups = "InspectorService.DescribeResourceGroups"
}
export declare class DescribeResourceGroupsRequest extends SpeakeasyBase {
    describeResourceGroupsRequest: shared.DescribeResourceGroupsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeResourceGroupsXAmzTargetEnum;
}
export declare class DescribeResourceGroupsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeResourceGroupsResponse?: shared.DescribeResourceGroupsResponse;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

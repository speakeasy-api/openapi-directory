import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeEndpointsXAmzTargetEnum {
    DynamoDB20120810DescribeEndpoints = "DynamoDB_20120810.DescribeEndpoints"
}
export declare class DescribeEndpointsRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEndpointsXAmzTargetEnum;
}
export declare class DescribeEndpointsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeEndpointsResponse?: shared.DescribeEndpointsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

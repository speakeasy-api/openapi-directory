import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeEndpointsXAmzTargetEnum {
    AmazonDMSv20160101DescribeEndpoints = "AmazonDMSv20160101.DescribeEndpoints"
}
export declare class DescribeEndpointsRequest extends SpeakeasyBase {
    describeEndpointsMessage: shared.DescribeEndpointsMessage;
    /**
     * Pagination token
     */
    marker?: string;
    /**
     * Pagination limit
     */
    maxRecords?: string;
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
    /**
     * ResourceNotFoundFault
     */
    resourceNotFoundFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeEndpointXAmzTargetEnum {
    AWSEventsDescribeEndpoint = "AWSEvents.DescribeEndpoint"
}
export declare class DescribeEndpointRequest extends SpeakeasyBase {
    describeEndpointRequest: shared.DescribeEndpointRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEndpointXAmzTargetEnum;
}
export declare class DescribeEndpointResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeEndpointResponse?: shared.DescribeEndpointResponse;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

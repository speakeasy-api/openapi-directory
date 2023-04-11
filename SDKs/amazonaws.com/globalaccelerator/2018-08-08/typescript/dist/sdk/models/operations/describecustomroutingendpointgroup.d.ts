import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeCustomRoutingEndpointGroupXAmzTargetEnum {
    GlobalAcceleratorV20180706DescribeCustomRoutingEndpointGroup = "GlobalAccelerator_V20180706.DescribeCustomRoutingEndpointGroup"
}
export declare class DescribeCustomRoutingEndpointGroupRequest extends SpeakeasyBase {
    describeCustomRoutingEndpointGroupRequest: shared.DescribeCustomRoutingEndpointGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeCustomRoutingEndpointGroupXAmzTargetEnum;
}
export declare class DescribeCustomRoutingEndpointGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeCustomRoutingEndpointGroupResponse?: shared.DescribeCustomRoutingEndpointGroupResponse;
    /**
     * EndpointGroupNotFoundException
     */
    endpointGroupNotFoundException?: any;
    /**
     * InternalServiceErrorException
     */
    internalServiceErrorException?: any;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeEndpointGroupXAmzTargetEnum {
    GlobalAcceleratorV20180706DescribeEndpointGroup = "GlobalAccelerator_V20180706.DescribeEndpointGroup"
}
export declare class DescribeEndpointGroupRequest extends SpeakeasyBase {
    describeEndpointGroupRequest: shared.DescribeEndpointGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEndpointGroupXAmzTargetEnum;
}
export declare class DescribeEndpointGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeEndpointGroupResponse?: shared.DescribeEndpointGroupResponse;
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

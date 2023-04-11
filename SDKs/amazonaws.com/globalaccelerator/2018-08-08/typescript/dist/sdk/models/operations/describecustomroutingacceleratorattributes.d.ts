import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeCustomRoutingAcceleratorAttributesXAmzTargetEnum {
    GlobalAcceleratorV20180706DescribeCustomRoutingAcceleratorAttributes = "GlobalAccelerator_V20180706.DescribeCustomRoutingAcceleratorAttributes"
}
export declare class DescribeCustomRoutingAcceleratorAttributesRequest extends SpeakeasyBase {
    describeCustomRoutingAcceleratorAttributesRequest: shared.DescribeCustomRoutingAcceleratorAttributesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeCustomRoutingAcceleratorAttributesXAmzTargetEnum;
}
export declare class DescribeCustomRoutingAcceleratorAttributesResponse extends SpeakeasyBase {
    /**
     * AcceleratorNotFoundException
     */
    acceleratorNotFoundException?: any;
    contentType: string;
    /**
     * Success
     */
    describeCustomRoutingAcceleratorAttributesResponse?: shared.DescribeCustomRoutingAcceleratorAttributesResponse;
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

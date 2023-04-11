import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeCustomRoutingAcceleratorXAmzTargetEnum {
    GlobalAcceleratorV20180706DescribeCustomRoutingAccelerator = "GlobalAccelerator_V20180706.DescribeCustomRoutingAccelerator"
}
export declare class DescribeCustomRoutingAcceleratorRequest extends SpeakeasyBase {
    describeCustomRoutingAcceleratorRequest: shared.DescribeCustomRoutingAcceleratorRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeCustomRoutingAcceleratorXAmzTargetEnum;
}
export declare class DescribeCustomRoutingAcceleratorResponse extends SpeakeasyBase {
    /**
     * AcceleratorNotFoundException
     */
    acceleratorNotFoundException?: any;
    contentType: string;
    /**
     * Success
     */
    describeCustomRoutingAcceleratorResponse?: shared.DescribeCustomRoutingAcceleratorResponse;
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

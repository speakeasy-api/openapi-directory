import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeCustomRoutingListenerXAmzTargetEnum {
    GlobalAcceleratorV20180706DescribeCustomRoutingListener = "GlobalAccelerator_V20180706.DescribeCustomRoutingListener"
}
export declare class DescribeCustomRoutingListenerRequest extends SpeakeasyBase {
    describeCustomRoutingListenerRequest: shared.DescribeCustomRoutingListenerRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeCustomRoutingListenerXAmzTargetEnum;
}
export declare class DescribeCustomRoutingListenerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeCustomRoutingListenerResponse?: shared.DescribeCustomRoutingListenerResponse;
    /**
     * InternalServiceErrorException
     */
    internalServiceErrorException?: any;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * ListenerNotFoundException
     */
    listenerNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

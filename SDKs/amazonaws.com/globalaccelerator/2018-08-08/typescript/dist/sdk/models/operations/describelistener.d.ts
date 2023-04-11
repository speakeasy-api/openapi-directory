import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeListenerXAmzTargetEnum {
    GlobalAcceleratorV20180706DescribeListener = "GlobalAccelerator_V20180706.DescribeListener"
}
export declare class DescribeListenerRequest extends SpeakeasyBase {
    describeListenerRequest: shared.DescribeListenerRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeListenerXAmzTargetEnum;
}
export declare class DescribeListenerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeListenerResponse?: shared.DescribeListenerResponse;
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

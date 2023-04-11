import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateCustomRoutingListenerXAmzTargetEnum {
    GlobalAcceleratorV20180706UpdateCustomRoutingListener = "GlobalAccelerator_V20180706.UpdateCustomRoutingListener"
}
export declare class UpdateCustomRoutingListenerRequest extends SpeakeasyBase {
    updateCustomRoutingListenerRequest: shared.UpdateCustomRoutingListenerRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateCustomRoutingListenerXAmzTargetEnum;
}
export declare class UpdateCustomRoutingListenerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServiceErrorException
     */
    internalServiceErrorException?: any;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * InvalidPortRangeException
     */
    invalidPortRangeException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ListenerNotFoundException
     */
    listenerNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateCustomRoutingListenerResponse?: shared.UpdateCustomRoutingListenerResponse;
}

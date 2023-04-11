import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateCustomRoutingListenerXAmzTargetEnum {
    GlobalAcceleratorV20180706CreateCustomRoutingListener = "GlobalAccelerator_V20180706.CreateCustomRoutingListener"
}
export declare class CreateCustomRoutingListenerRequest extends SpeakeasyBase {
    createCustomRoutingListenerRequest: shared.CreateCustomRoutingListenerRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateCustomRoutingListenerXAmzTargetEnum;
}
export declare class CreateCustomRoutingListenerResponse extends SpeakeasyBase {
    /**
     * AcceleratorNotFoundException
     */
    acceleratorNotFoundException?: any;
    contentType: string;
    /**
     * Success
     */
    createCustomRoutingListenerResponse?: shared.CreateCustomRoutingListenerResponse;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
}

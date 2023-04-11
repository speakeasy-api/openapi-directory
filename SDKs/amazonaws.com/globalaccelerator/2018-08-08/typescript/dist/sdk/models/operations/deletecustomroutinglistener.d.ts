import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteCustomRoutingListenerXAmzTargetEnum {
    GlobalAcceleratorV20180706DeleteCustomRoutingListener = "GlobalAccelerator_V20180706.DeleteCustomRoutingListener"
}
export declare class DeleteCustomRoutingListenerRequest extends SpeakeasyBase {
    deleteCustomRoutingListenerRequest: shared.DeleteCustomRoutingListenerRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteCustomRoutingListenerXAmzTargetEnum;
}
export declare class DeleteCustomRoutingListenerResponse extends SpeakeasyBase {
    /**
     * AssociatedEndpointGroupFoundException
     */
    associatedEndpointGroupFoundException?: any;
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
     * ListenerNotFoundException
     */
    listenerNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

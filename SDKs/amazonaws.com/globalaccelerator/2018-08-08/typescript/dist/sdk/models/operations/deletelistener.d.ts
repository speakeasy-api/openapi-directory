import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteListenerXAmzTargetEnum {
    GlobalAcceleratorV20180706DeleteListener = "GlobalAccelerator_V20180706.DeleteListener"
}
export declare class DeleteListenerRequest extends SpeakeasyBase {
    deleteListenerRequest: shared.DeleteListenerRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteListenerXAmzTargetEnum;
}
export declare class DeleteListenerResponse extends SpeakeasyBase {
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

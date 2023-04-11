import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateListenerXAmzTargetEnum {
    GlobalAcceleratorV20180706UpdateListener = "GlobalAccelerator_V20180706.UpdateListener"
}
export declare class UpdateListenerRequest extends SpeakeasyBase {
    updateListenerRequest: shared.UpdateListenerRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateListenerXAmzTargetEnum;
}
export declare class UpdateListenerResponse extends SpeakeasyBase {
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
    updateListenerResponse?: shared.UpdateListenerResponse;
}

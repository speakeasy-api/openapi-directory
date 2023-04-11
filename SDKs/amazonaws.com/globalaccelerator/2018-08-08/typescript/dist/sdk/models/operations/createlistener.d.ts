import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateListenerXAmzTargetEnum {
    GlobalAcceleratorV20180706CreateListener = "GlobalAccelerator_V20180706.CreateListener"
}
export declare class CreateListenerRequest extends SpeakeasyBase {
    createListenerRequest: shared.CreateListenerRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateListenerXAmzTargetEnum;
}
export declare class CreateListenerResponse extends SpeakeasyBase {
    /**
     * AcceleratorNotFoundException
     */
    acceleratorNotFoundException?: any;
    contentType: string;
    /**
     * Success
     */
    createListenerResponse?: shared.CreateListenerResponse;
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

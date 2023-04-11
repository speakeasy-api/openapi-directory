import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UntagResourceXAmzTargetEnum {
    GlobalAcceleratorV20180706UntagResource = "GlobalAccelerator_V20180706.UntagResource"
}
export declare class UntagResourceRequest extends SpeakeasyBase {
    untagResourceRequest: shared.UntagResourceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UntagResourceXAmzTargetEnum;
}
export declare class UntagResourceResponse extends SpeakeasyBase {
    /**
     * AcceleratorNotFoundException
     */
    acceleratorNotFoundException?: any;
    contentType: string;
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
    /**
     * Success
     */
    untagResourceResponse?: Record<string, any>;
}

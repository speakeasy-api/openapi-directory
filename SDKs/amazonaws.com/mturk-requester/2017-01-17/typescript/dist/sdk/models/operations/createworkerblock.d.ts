import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateWorkerBlockXAmzTargetEnum {
    MTurkRequesterServiceV20170117CreateWorkerBlock = "MTurkRequesterServiceV20170117.CreateWorkerBlock"
}
export declare class CreateWorkerBlockRequest extends SpeakeasyBase {
    createWorkerBlockRequest: shared.CreateWorkerBlockRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateWorkerBlockXAmzTargetEnum;
}
export declare class CreateWorkerBlockResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createWorkerBlockResponse?: Record<string, any>;
    /**
     * RequestError
     */
    requestError?: any;
    /**
     * ServiceFault
     */
    serviceFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

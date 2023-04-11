import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteWorkerBlockXAmzTargetEnum {
    MTurkRequesterServiceV20170117DeleteWorkerBlock = "MTurkRequesterServiceV20170117.DeleteWorkerBlock"
}
export declare class DeleteWorkerBlockRequest extends SpeakeasyBase {
    deleteWorkerBlockRequest: shared.DeleteWorkerBlockRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteWorkerBlockXAmzTargetEnum;
}
export declare class DeleteWorkerBlockResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteWorkerBlockResponse?: Record<string, any>;
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

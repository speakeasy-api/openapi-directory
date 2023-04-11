import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CancelResourceRequestXAmzTargetEnum {
    CloudApiServiceCancelResourceRequest = "CloudApiService.CancelResourceRequest"
}
export declare class CancelResourceRequestRequest extends SpeakeasyBase {
    cancelResourceRequestInput: shared.CancelResourceRequestInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CancelResourceRequestXAmzTargetEnum;
}
export declare class CancelResourceRequestResponse extends SpeakeasyBase {
    /**
     * Success
     */
    cancelResourceRequestOutput?: shared.CancelResourceRequestOutput;
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * RequestTokenNotFoundException
     */
    requestTokenNotFoundException?: any;
}

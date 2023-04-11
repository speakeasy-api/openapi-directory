import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum NotifyWorkersXAmzTargetEnum {
    MTurkRequesterServiceV20170117NotifyWorkers = "MTurkRequesterServiceV20170117.NotifyWorkers"
}
export declare class NotifyWorkersRequest extends SpeakeasyBase {
    notifyWorkersRequest: shared.NotifyWorkersRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: NotifyWorkersXAmzTargetEnum;
}
export declare class NotifyWorkersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    notifyWorkersResponse?: shared.NotifyWorkersResponse;
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

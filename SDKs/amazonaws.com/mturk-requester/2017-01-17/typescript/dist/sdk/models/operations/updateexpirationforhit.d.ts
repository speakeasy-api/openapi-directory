import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateExpirationForHITXAmzTargetEnum {
    MTurkRequesterServiceV20170117UpdateExpirationForHIT = "MTurkRequesterServiceV20170117.UpdateExpirationForHIT"
}
export declare class UpdateExpirationForHITRequest extends SpeakeasyBase {
    updateExpirationForHITRequest: shared.UpdateExpirationForHITRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateExpirationForHITXAmzTargetEnum;
}
export declare class UpdateExpirationForHITResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * RequestError
     */
    requestError?: any;
    /**
     * ServiceFault
     */
    serviceFault?: any;
    /**
     * Success
     */
    updateExpirationForHITResponse?: Record<string, any>;
}

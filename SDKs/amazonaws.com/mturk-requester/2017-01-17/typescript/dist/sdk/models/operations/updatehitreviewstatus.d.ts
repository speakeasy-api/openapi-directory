import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateHITReviewStatusXAmzTargetEnum {
    MTurkRequesterServiceV20170117UpdateHITReviewStatus = "MTurkRequesterServiceV20170117.UpdateHITReviewStatus"
}
export declare class UpdateHITReviewStatusRequest extends SpeakeasyBase {
    updateHITReviewStatusRequest: shared.UpdateHITReviewStatusRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateHITReviewStatusXAmzTargetEnum;
}
export declare class UpdateHITReviewStatusResponse extends SpeakeasyBase {
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
    updateHITReviewStatusResponse?: Record<string, any>;
}

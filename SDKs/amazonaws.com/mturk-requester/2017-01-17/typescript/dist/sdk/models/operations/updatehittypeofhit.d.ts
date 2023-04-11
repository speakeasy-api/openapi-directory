import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateHITTypeOfHITXAmzTargetEnum {
    MTurkRequesterServiceV20170117UpdateHITTypeOfHIT = "MTurkRequesterServiceV20170117.UpdateHITTypeOfHIT"
}
export declare class UpdateHITTypeOfHITRequest extends SpeakeasyBase {
    updateHITTypeOfHITRequest: shared.UpdateHITTypeOfHITRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateHITTypeOfHITXAmzTargetEnum;
}
export declare class UpdateHITTypeOfHITResponse extends SpeakeasyBase {
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
    updateHITTypeOfHITResponse?: Record<string, any>;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetHITXAmzTargetEnum {
    MTurkRequesterServiceV20170117GetHIT = "MTurkRequesterServiceV20170117.GetHIT"
}
export declare class GetHITRequest extends SpeakeasyBase {
    getHITRequest: shared.GetHITRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetHITXAmzTargetEnum;
}
export declare class GetHITResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getHITResponse?: shared.GetHITResponse;
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

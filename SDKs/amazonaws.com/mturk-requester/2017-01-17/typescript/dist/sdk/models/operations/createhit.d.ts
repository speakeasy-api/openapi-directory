import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateHITXAmzTargetEnum {
    MTurkRequesterServiceV20170117CreateHIT = "MTurkRequesterServiceV20170117.CreateHIT"
}
export declare class CreateHITRequest extends SpeakeasyBase {
    createHITRequest: shared.CreateHITRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateHITXAmzTargetEnum;
}
export declare class CreateHITResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createHITResponse?: shared.CreateHITResponse;
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

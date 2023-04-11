import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteHITXAmzTargetEnum {
    MTurkRequesterServiceV20170117DeleteHIT = "MTurkRequesterServiceV20170117.DeleteHIT"
}
export declare class DeleteHITRequest extends SpeakeasyBase {
    deleteHITRequest: shared.DeleteHITRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteHITXAmzTargetEnum;
}
export declare class DeleteHITResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteHITResponse?: Record<string, any>;
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

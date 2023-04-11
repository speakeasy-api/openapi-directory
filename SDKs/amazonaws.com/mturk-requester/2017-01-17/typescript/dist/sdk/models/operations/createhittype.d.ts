import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateHITTypeXAmzTargetEnum {
    MTurkRequesterServiceV20170117CreateHITType = "MTurkRequesterServiceV20170117.CreateHITType"
}
export declare class CreateHITTypeRequest extends SpeakeasyBase {
    createHITTypeRequest: shared.CreateHITTypeRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateHITTypeXAmzTargetEnum;
}
export declare class CreateHITTypeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createHITTypeResponse?: shared.CreateHITTypeResponse;
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

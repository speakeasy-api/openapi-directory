import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateHITWithHITTypeXAmzTargetEnum {
    MTurkRequesterServiceV20170117CreateHITWithHITType = "MTurkRequesterServiceV20170117.CreateHITWithHITType"
}
export declare class CreateHITWithHITTypeRequest extends SpeakeasyBase {
    createHITWithHITTypeRequest: shared.CreateHITWithHITTypeRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateHITWithHITTypeXAmzTargetEnum;
}
export declare class CreateHITWithHITTypeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createHITWithHITTypeResponse?: shared.CreateHITWithHITTypeResponse;
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

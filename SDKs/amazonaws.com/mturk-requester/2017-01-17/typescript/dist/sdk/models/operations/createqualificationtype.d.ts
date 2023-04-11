import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateQualificationTypeXAmzTargetEnum {
    MTurkRequesterServiceV20170117CreateQualificationType = "MTurkRequesterServiceV20170117.CreateQualificationType"
}
export declare class CreateQualificationTypeRequest extends SpeakeasyBase {
    createQualificationTypeRequest: shared.CreateQualificationTypeRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateQualificationTypeXAmzTargetEnum;
}
export declare class CreateQualificationTypeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createQualificationTypeResponse?: shared.CreateQualificationTypeResponse;
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

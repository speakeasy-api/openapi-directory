import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetQualificationTypeXAmzTargetEnum {
    MTurkRequesterServiceV20170117GetQualificationType = "MTurkRequesterServiceV20170117.GetQualificationType"
}
export declare class GetQualificationTypeRequest extends SpeakeasyBase {
    getQualificationTypeRequest: shared.GetQualificationTypeRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetQualificationTypeXAmzTargetEnum;
}
export declare class GetQualificationTypeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getQualificationTypeResponse?: shared.GetQualificationTypeResponse;
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

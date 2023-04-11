import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateQualificationTypeXAmzTargetEnum {
    MTurkRequesterServiceV20170117UpdateQualificationType = "MTurkRequesterServiceV20170117.UpdateQualificationType"
}
export declare class UpdateQualificationTypeRequest extends SpeakeasyBase {
    updateQualificationTypeRequest: shared.UpdateQualificationTypeRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateQualificationTypeXAmzTargetEnum;
}
export declare class UpdateQualificationTypeResponse extends SpeakeasyBase {
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
    updateQualificationTypeResponse?: shared.UpdateQualificationTypeResponse;
}

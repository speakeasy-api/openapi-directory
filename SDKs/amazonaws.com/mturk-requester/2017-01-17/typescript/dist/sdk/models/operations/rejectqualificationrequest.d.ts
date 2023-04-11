import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RejectQualificationRequestXAmzTargetEnum {
    MTurkRequesterServiceV20170117RejectQualificationRequest = "MTurkRequesterServiceV20170117.RejectQualificationRequest"
}
export declare class RejectQualificationRequestRequest extends SpeakeasyBase {
    rejectQualificationRequestRequest: shared.RejectQualificationRequestRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RejectQualificationRequestXAmzTargetEnum;
}
export declare class RejectQualificationRequestResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    rejectQualificationRequestResponse?: Record<string, any>;
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

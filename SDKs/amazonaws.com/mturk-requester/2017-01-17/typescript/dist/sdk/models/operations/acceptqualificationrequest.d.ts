import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AcceptQualificationRequestXAmzTargetEnum {
    MTurkRequesterServiceV20170117AcceptQualificationRequest = "MTurkRequesterServiceV20170117.AcceptQualificationRequest"
}
export declare class AcceptQualificationRequestRequest extends SpeakeasyBase {
    acceptQualificationRequestRequest: shared.AcceptQualificationRequestRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AcceptQualificationRequestXAmzTargetEnum;
}
export declare class AcceptQualificationRequestResponse extends SpeakeasyBase {
    /**
     * Success
     */
    acceptQualificationRequestResponse?: Record<string, any>;
    contentType: string;
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

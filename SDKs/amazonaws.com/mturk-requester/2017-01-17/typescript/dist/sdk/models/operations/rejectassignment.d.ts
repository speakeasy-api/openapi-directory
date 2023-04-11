import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RejectAssignmentXAmzTargetEnum {
    MTurkRequesterServiceV20170117RejectAssignment = "MTurkRequesterServiceV20170117.RejectAssignment"
}
export declare class RejectAssignmentRequest extends SpeakeasyBase {
    rejectAssignmentRequest: shared.RejectAssignmentRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RejectAssignmentXAmzTargetEnum;
}
export declare class RejectAssignmentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    rejectAssignmentResponse?: Record<string, any>;
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

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ApproveAssignmentXAmzTargetEnum {
    MTurkRequesterServiceV20170117ApproveAssignment = "MTurkRequesterServiceV20170117.ApproveAssignment"
}
export declare class ApproveAssignmentRequest extends SpeakeasyBase {
    approveAssignmentRequest: shared.ApproveAssignmentRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ApproveAssignmentXAmzTargetEnum;
}
export declare class ApproveAssignmentResponse extends SpeakeasyBase {
    /**
     * Success
     */
    approveAssignmentResponse?: Record<string, any>;
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

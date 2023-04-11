import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetAssignmentXAmzTargetEnum {
    MTurkRequesterServiceV20170117GetAssignment = "MTurkRequesterServiceV20170117.GetAssignment"
}
export declare class GetAssignmentRequest extends SpeakeasyBase {
    getAssignmentRequest: shared.GetAssignmentRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAssignmentXAmzTargetEnum;
}
export declare class GetAssignmentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getAssignmentResponse?: shared.GetAssignmentResponse;
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

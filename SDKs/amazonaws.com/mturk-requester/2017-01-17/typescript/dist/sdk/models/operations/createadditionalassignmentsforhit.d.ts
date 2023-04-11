import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateAdditionalAssignmentsForHITXAmzTargetEnum {
    MTurkRequesterServiceV20170117CreateAdditionalAssignmentsForHIT = "MTurkRequesterServiceV20170117.CreateAdditionalAssignmentsForHIT"
}
export declare class CreateAdditionalAssignmentsForHITRequest extends SpeakeasyBase {
    createAdditionalAssignmentsForHITRequest: shared.CreateAdditionalAssignmentsForHITRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateAdditionalAssignmentsForHITXAmzTargetEnum;
}
export declare class CreateAdditionalAssignmentsForHITResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createAdditionalAssignmentsForHITResponse?: Record<string, any>;
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

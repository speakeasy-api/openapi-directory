import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeletePolicyXAmzTargetEnum {
    AWSOrganizationsV20161128DeletePolicy = "AWSOrganizationsV20161128.DeletePolicy"
}
export declare class DeletePolicyRequest extends SpeakeasyBase {
    deletePolicyRequest: shared.DeletePolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeletePolicyXAmzTargetEnum;
}
export declare class DeletePolicyResponse extends SpeakeasyBase {
    /**
     * AWSOrganizationsNotInUseException
     */
    awsOrganizationsNotInUseException?: any;
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * PolicyInUseException
     */
    policyInUseException?: any;
    /**
     * PolicyNotFoundException
     */
    policyNotFoundException?: any;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * UnsupportedAPIEndpointException
     */
    unsupportedAPIEndpointException?: any;
}

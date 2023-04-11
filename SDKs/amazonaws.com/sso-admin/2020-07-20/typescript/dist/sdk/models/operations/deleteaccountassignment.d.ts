import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteAccountAssignmentXAmzTargetEnum {
    SWBExternalServiceDeleteAccountAssignment = "SWBExternalService.DeleteAccountAssignment"
}
export declare class DeleteAccountAssignmentRequest extends SpeakeasyBase {
    deleteAccountAssignmentRequest: shared.DeleteAccountAssignmentRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAccountAssignmentXAmzTargetEnum;
}
export declare class DeleteAccountAssignmentResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteAccountAssignmentResponse?: shared.DeleteAccountAssignmentResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}

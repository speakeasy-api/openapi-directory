import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteInlinePolicyFromPermissionSetXAmzTargetEnum {
    SWBExternalServiceDeleteInlinePolicyFromPermissionSet = "SWBExternalService.DeleteInlinePolicyFromPermissionSet"
}
export declare class DeleteInlinePolicyFromPermissionSetRequest extends SpeakeasyBase {
    deleteInlinePolicyFromPermissionSetRequest: shared.DeleteInlinePolicyFromPermissionSetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteInlinePolicyFromPermissionSetXAmzTargetEnum;
}
export declare class DeleteInlinePolicyFromPermissionSetResponse extends SpeakeasyBase {
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
    deleteInlinePolicyFromPermissionSetResponse?: Record<string, any>;
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

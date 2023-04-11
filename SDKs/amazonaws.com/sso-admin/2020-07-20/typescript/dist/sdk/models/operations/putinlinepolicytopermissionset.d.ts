import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutInlinePolicyToPermissionSetXAmzTargetEnum {
    SWBExternalServicePutInlinePolicyToPermissionSet = "SWBExternalService.PutInlinePolicyToPermissionSet"
}
export declare class PutInlinePolicyToPermissionSetRequest extends SpeakeasyBase {
    putInlinePolicyToPermissionSetRequest: shared.PutInlinePolicyToPermissionSetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutInlinePolicyToPermissionSetXAmzTargetEnum;
}
export declare class PutInlinePolicyToPermissionSetResponse extends SpeakeasyBase {
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
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    putInlinePolicyToPermissionSetResponse?: Record<string, any>;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}

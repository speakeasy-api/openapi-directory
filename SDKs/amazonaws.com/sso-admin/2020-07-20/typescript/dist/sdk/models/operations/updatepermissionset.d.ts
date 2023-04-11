import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdatePermissionSetXAmzTargetEnum {
    SWBExternalServiceUpdatePermissionSet = "SWBExternalService.UpdatePermissionSet"
}
export declare class UpdatePermissionSetRequest extends SpeakeasyBase {
    updatePermissionSetRequest: shared.UpdatePermissionSetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdatePermissionSetXAmzTargetEnum;
}
export declare class UpdatePermissionSetResponse extends SpeakeasyBase {
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updatePermissionSetResponse?: Record<string, any>;
    /**
     * ValidationException
     */
    validationException?: any;
}

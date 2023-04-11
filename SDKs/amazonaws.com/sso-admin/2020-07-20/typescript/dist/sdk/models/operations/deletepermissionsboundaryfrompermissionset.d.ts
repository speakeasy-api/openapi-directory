import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeletePermissionsBoundaryFromPermissionSetXAmzTargetEnum {
    SWBExternalServiceDeletePermissionsBoundaryFromPermissionSet = "SWBExternalService.DeletePermissionsBoundaryFromPermissionSet"
}
export declare class DeletePermissionsBoundaryFromPermissionSetRequest extends SpeakeasyBase {
    deletePermissionsBoundaryFromPermissionSetRequest: shared.DeletePermissionsBoundaryFromPermissionSetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeletePermissionsBoundaryFromPermissionSetXAmzTargetEnum;
}
export declare class DeletePermissionsBoundaryFromPermissionSetResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    deletePermissionsBoundaryFromPermissionSetResponse?: Record<string, any>;
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

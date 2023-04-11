import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutPermissionsBoundaryToPermissionSetXAmzTargetEnum {
    SWBExternalServicePutPermissionsBoundaryToPermissionSet = "SWBExternalService.PutPermissionsBoundaryToPermissionSet"
}
export declare class PutPermissionsBoundaryToPermissionSetRequest extends SpeakeasyBase {
    putPermissionsBoundaryToPermissionSetRequest: shared.PutPermissionsBoundaryToPermissionSetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutPermissionsBoundaryToPermissionSetXAmzTargetEnum;
}
export declare class PutPermissionsBoundaryToPermissionSetResponse extends SpeakeasyBase {
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
    putPermissionsBoundaryToPermissionSetResponse?: Record<string, any>;
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

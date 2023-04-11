import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetPermissionsBoundaryForPermissionSetXAmzTargetEnum {
    SWBExternalServiceGetPermissionsBoundaryForPermissionSet = "SWBExternalService.GetPermissionsBoundaryForPermissionSet"
}
export declare class GetPermissionsBoundaryForPermissionSetRequest extends SpeakeasyBase {
    getPermissionsBoundaryForPermissionSetRequest: shared.GetPermissionsBoundaryForPermissionSetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetPermissionsBoundaryForPermissionSetXAmzTargetEnum;
}
export declare class GetPermissionsBoundaryForPermissionSetResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getPermissionsBoundaryForPermissionSetResponse?: shared.GetPermissionsBoundaryForPermissionSetResponse;
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

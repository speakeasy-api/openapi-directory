import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetInlinePolicyForPermissionSetXAmzTargetEnum {
    SWBExternalServiceGetInlinePolicyForPermissionSet = "SWBExternalService.GetInlinePolicyForPermissionSet"
}
export declare class GetInlinePolicyForPermissionSetRequest extends SpeakeasyBase {
    getInlinePolicyForPermissionSetRequest: shared.GetInlinePolicyForPermissionSetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetInlinePolicyForPermissionSetXAmzTargetEnum;
}
export declare class GetInlinePolicyForPermissionSetResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getInlinePolicyForPermissionSetResponse?: shared.GetInlinePolicyForPermissionSetResponse;
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

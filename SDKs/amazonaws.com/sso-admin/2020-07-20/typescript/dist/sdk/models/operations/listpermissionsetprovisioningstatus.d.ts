import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListPermissionSetProvisioningStatusXAmzTargetEnum {
    SWBExternalServiceListPermissionSetProvisioningStatus = "SWBExternalService.ListPermissionSetProvisioningStatus"
}
export declare class ListPermissionSetProvisioningStatusRequest extends SpeakeasyBase {
    listPermissionSetProvisioningStatusRequest: shared.ListPermissionSetProvisioningStatusRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListPermissionSetProvisioningStatusXAmzTargetEnum;
}
export declare class ListPermissionSetProvisioningStatusResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listPermissionSetProvisioningStatusResponse?: shared.ListPermissionSetProvisioningStatusResponse;
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

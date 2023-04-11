import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListPermissionSetsProvisionedToAccountXAmzTargetEnum {
    SWBExternalServiceListPermissionSetsProvisionedToAccount = "SWBExternalService.ListPermissionSetsProvisionedToAccount"
}
export declare class ListPermissionSetsProvisionedToAccountRequest extends SpeakeasyBase {
    listPermissionSetsProvisionedToAccountRequest: shared.ListPermissionSetsProvisionedToAccountRequest;
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
    xAmzTarget: ListPermissionSetsProvisionedToAccountXAmzTargetEnum;
}
export declare class ListPermissionSetsProvisionedToAccountResponse extends SpeakeasyBase {
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
    listPermissionSetsProvisionedToAccountResponse?: shared.ListPermissionSetsProvisionedToAccountResponse;
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

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteMailboxPermissionsXAmzTargetEnum {
    WorkMailServiceDeleteMailboxPermissions = "WorkMailService.DeleteMailboxPermissions"
}
export declare class DeleteMailboxPermissionsRequest extends SpeakeasyBase {
    deleteMailboxPermissionsRequest: shared.DeleteMailboxPermissionsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteMailboxPermissionsXAmzTargetEnum;
}
export declare class DeleteMailboxPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteMailboxPermissionsResponse?: Record<string, any>;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * EntityStateException
     */
    entityStateException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * OrganizationNotFoundException
     */
    organizationNotFoundException?: any;
    /**
     * OrganizationStateException
     */
    organizationStateException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

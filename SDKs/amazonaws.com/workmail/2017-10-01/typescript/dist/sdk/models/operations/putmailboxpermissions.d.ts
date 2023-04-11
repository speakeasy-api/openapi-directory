import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutMailboxPermissionsXAmzTargetEnum {
    WorkMailServicePutMailboxPermissions = "WorkMailService.PutMailboxPermissions"
}
export declare class PutMailboxPermissionsRequest extends SpeakeasyBase {
    putMailboxPermissionsRequest: shared.PutMailboxPermissionsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutMailboxPermissionsXAmzTargetEnum;
}
export declare class PutMailboxPermissionsResponse extends SpeakeasyBase {
    contentType: string;
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
    /**
     * Success
     */
    putMailboxPermissionsResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

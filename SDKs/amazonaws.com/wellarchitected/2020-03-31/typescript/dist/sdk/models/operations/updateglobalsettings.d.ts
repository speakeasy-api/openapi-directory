import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The status of organization sharing settings.
 */
export declare enum UpdateGlobalSettingsRequestBodyOrganizationSharingStatusEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}
export declare class UpdateGlobalSettingsRequestBody extends SpeakeasyBase {
    /**
     * The status of organization sharing settings.
     */
    organizationSharingStatus?: UpdateGlobalSettingsRequestBodyOrganizationSharingStatusEnum;
}
export declare class UpdateGlobalSettingsRequest extends SpeakeasyBase {
    requestBody: UpdateGlobalSettingsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateGlobalSettingsResponse extends SpeakeasyBase {
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
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}

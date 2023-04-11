import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Represents which scan types are automatically enabled for new members of your Amazon Inspector organization.
 */
export declare class UpdateOrganizationConfigurationRequestBodyAutoEnable extends SpeakeasyBase {
    ec2?: boolean;
    ecr?: boolean;
    lambda?: boolean;
}
export declare class UpdateOrganizationConfigurationRequestBody extends SpeakeasyBase {
    /**
     * Represents which scan types are automatically enabled for new members of your Amazon Inspector organization.
     */
    autoEnable: UpdateOrganizationConfigurationRequestBodyAutoEnable;
}
export declare class UpdateOrganizationConfigurationRequest extends SpeakeasyBase {
    requestBody: UpdateOrganizationConfigurationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateOrganizationConfigurationResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
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
     * Success
     */
    updateOrganizationConfigurationResponse?: shared.UpdateOrganizationConfigurationResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}

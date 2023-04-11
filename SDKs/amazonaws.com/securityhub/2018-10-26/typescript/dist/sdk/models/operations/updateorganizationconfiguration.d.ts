import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * <p>Whether to automatically enable Security Hub <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards-enable-disable.html">default standards</a> for new member accounts in the organization.</p> <p>By default, this parameter is equal to <code>DEFAULT</code>, and new member accounts are automatically enabled with default Security Hub standards.</p> <p>To opt out of enabling default standards for new member accounts, set this parameter equal to <code>NONE</code>.</p>
 */
export declare enum UpdateOrganizationConfigurationRequestBodyAutoEnableStandardsEnum {
    None = "NONE",
    Default = "DEFAULT"
}
export declare class UpdateOrganizationConfigurationRequestBody extends SpeakeasyBase {
    /**
     * <p>Whether to automatically enable Security Hub for new accounts in the organization.</p> <p>By default, this is <code>false</code>, and new accounts are not added automatically.</p> <p>To automatically enable Security Hub for new accounts, set this to <code>true</code>.</p>
     */
    autoEnable: boolean;
    /**
     * <p>Whether to automatically enable Security Hub <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards-enable-disable.html">default standards</a> for new member accounts in the organization.</p> <p>By default, this parameter is equal to <code>DEFAULT</code>, and new member accounts are automatically enabled with default Security Hub standards.</p> <p>To opt out of enabling default standards for new member accounts, set this parameter equal to <code>NONE</code>.</p>
     */
    autoEnableStandards?: UpdateOrganizationConfigurationRequestBodyAutoEnableStandardsEnum;
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
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidAccessException
     */
    invalidAccessException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateOrganizationConfigurationResponse?: Record<string, any>;
}

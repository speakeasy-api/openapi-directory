import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * <p>Updates whether the calling account has consolidated control findings turned on. If the value for this field is set to <code>SECURITY_CONTROL</code>, Security Hub generates a single finding for a control check even when the check applies to multiple enabled standards.</p> <p>If the value for this field is set to <code>STANDARD_CONTROL</code>, Security Hub generates separate findings for a control check when the check applies to multiple enabled standards.</p> <p>For accounts that are part of an organization, this value can only be updated in the administrator account.</p>
 */
export declare enum UpdateSecurityHubConfigurationRequestBodyControlFindingGeneratorEnum {
    StandardControl = "STANDARD_CONTROL",
    SecurityControl = "SECURITY_CONTROL"
}
export declare class UpdateSecurityHubConfigurationRequestBody extends SpeakeasyBase {
    /**
     * <p>Whether to automatically enable new controls when they are added to standards that are enabled.</p> <p>By default, this is set to <code>true</code>, and new controls are enabled automatically. To not automatically enable new controls, set this to <code>false</code>. </p>
     */
    autoEnableControls?: boolean;
    /**
     * <p>Updates whether the calling account has consolidated control findings turned on. If the value for this field is set to <code>SECURITY_CONTROL</code>, Security Hub generates a single finding for a control check even when the check applies to multiple enabled standards.</p> <p>If the value for this field is set to <code>STANDARD_CONTROL</code>, Security Hub generates separate findings for a control check when the check applies to multiple enabled standards.</p> <p>For accounts that are part of an organization, this value can only be updated in the administrator account.</p>
     */
    controlFindingGenerator?: UpdateSecurityHubConfigurationRequestBodyControlFindingGeneratorEnum;
}
export declare class UpdateSecurityHubConfigurationRequest extends SpeakeasyBase {
    requestBody: UpdateSecurityHubConfigurationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateSecurityHubConfigurationResponse extends SpeakeasyBase {
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
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    updateSecurityHubConfigurationResponse?: Record<string, any>;
}

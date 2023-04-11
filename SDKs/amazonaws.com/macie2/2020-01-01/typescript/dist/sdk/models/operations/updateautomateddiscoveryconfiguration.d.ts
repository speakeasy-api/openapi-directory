import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The status of the automated sensitive data discovery configuration for an Amazon Macie account. Valid values are:
 */
export declare enum UpdateAutomatedDiscoveryConfigurationRequestBodyStatusEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}
export declare class UpdateAutomatedDiscoveryConfigurationRequestBody extends SpeakeasyBase {
    /**
     * The status of the automated sensitive data discovery configuration for an Amazon Macie account. Valid values are:
     */
    status: UpdateAutomatedDiscoveryConfigurationRequestBodyStatusEnum;
}
export declare class UpdateAutomatedDiscoveryConfigurationRequest extends SpeakeasyBase {
    requestBody: UpdateAutomatedDiscoveryConfigurationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateAutomatedDiscoveryConfigurationResponse extends SpeakeasyBase {
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
    updateAutomatedDiscoveryConfigurationResponse?: Record<string, any>;
    /**
     * ValidationException
     */
    validationException?: any;
}

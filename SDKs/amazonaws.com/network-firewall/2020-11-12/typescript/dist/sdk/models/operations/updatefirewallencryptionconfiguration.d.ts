import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateFirewallEncryptionConfigurationXAmzTargetEnum {
    NetworkFirewall20201112UpdateFirewallEncryptionConfiguration = "NetworkFirewall_20201112.UpdateFirewallEncryptionConfiguration"
}
export declare class UpdateFirewallEncryptionConfigurationRequest extends SpeakeasyBase {
    updateFirewallEncryptionConfigurationRequest: shared.UpdateFirewallEncryptionConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateFirewallEncryptionConfigurationXAmzTargetEnum;
}
export declare class UpdateFirewallEncryptionConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * InvalidTokenException
     */
    invalidTokenException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceOwnerCheckException
     */
    resourceOwnerCheckException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateFirewallEncryptionConfigurationResponse?: shared.UpdateFirewallEncryptionConfigurationResponse;
}

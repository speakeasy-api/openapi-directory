import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Describes if the discovery of Linux subscriptions is enabled.
 */
export declare enum UpdateServiceSettingsRequestBodyLinuxSubscriptionsDiscoveryEnum {
    Enabled = "Enabled",
    Disabled = "Disabled"
}
/**
 * Lists the settings defined for discovering Linux subscriptions.
 */
export declare class UpdateServiceSettingsRequestBodyLinuxSubscriptionsDiscoverySettings extends SpeakeasyBase {
    organizationIntegration?: shared.OrganizationIntegrationEnum;
    sourceRegions?: string[];
}
export declare class UpdateServiceSettingsRequestBody extends SpeakeasyBase {
    /**
     * Describes if updates are allowed to the service settings for Linux subscriptions. If you allow updates, you can aggregate Linux subscription data in more than one home Region.
     */
    allowUpdate?: boolean;
    /**
     * Describes if the discovery of Linux subscriptions is enabled.
     */
    linuxSubscriptionsDiscovery: UpdateServiceSettingsRequestBodyLinuxSubscriptionsDiscoveryEnum;
    /**
     * Lists the settings defined for discovering Linux subscriptions.
     */
    linuxSubscriptionsDiscoverySettings: UpdateServiceSettingsRequestBodyLinuxSubscriptionsDiscoverySettings;
}
export declare class UpdateServiceSettingsRequest extends SpeakeasyBase {
    requestBody: UpdateServiceSettingsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateServiceSettingsResponse extends SpeakeasyBase {
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
    updateServiceSettingsResponse?: shared.UpdateServiceSettingsResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}

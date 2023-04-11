import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class General {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Subscribe to notifications
     *
     * @remarks
     * Creates a subscription to notifications informing you of events on your platform. After the subscription is created, the events specified in the configuration will be sent to the URL specified in the configuration. Subscriptions must be configured on a per-event basis (as opposed to, for example, a per-account holder basis), so all event notifications of a marketplace and of a given type will be sent to the same endpoint(s). A marketplace may have multiple endpoints if desired; an event notification may be sent to as many or as few different endpoints as configured.
     */
    postCreateNotificationConfiguration(req: shared.CreateNotificationConfigurationRequest, security: operations.PostCreateNotificationConfigurationSecurity, config?: AxiosRequestConfig): Promise<operations.PostCreateNotificationConfigurationResponse>;
    /**
     * Delete a notification subscription configuration
     *
     * @remarks
     * Deletes an existing notification subscription configuration. After the subscription is deleted, no further event notifications will be sent to the URL defined in the subscription.
     */
    postDeleteNotificationConfigurations(req: shared.DeleteNotificationConfigurationRequest, security: operations.PostDeleteNotificationConfigurationsSecurity, config?: AxiosRequestConfig): Promise<operations.PostDeleteNotificationConfigurationsResponse>;
    /**
     * Get a notification subscription configuration
     *
     * @remarks
     * Returns the details of the configuration of a notification subscription.
     */
    postGetNotificationConfiguration(req: shared.GetNotificationConfigurationRequest, security: operations.PostGetNotificationConfigurationSecurity, config?: AxiosRequestConfig): Promise<operations.PostGetNotificationConfigurationResponse>;
    /**
     * Get a list of notification subscription configurations
     *
     * @remarks
     * Returns the details of the configurations of all of the notification subscriptions in the platform of the executing user.
     */
    postGetNotificationConfigurationList(req: Record<string, any>, security: operations.PostGetNotificationConfigurationListSecurity, config?: AxiosRequestConfig): Promise<operations.PostGetNotificationConfigurationListResponse>;
    /**
     * Test a notification configuration
     *
     * @remarks
     * Tests an existing notification subscription configuration. For each event type specified, a test notification will be generated and sent to the URL configured in the subscription specified.
     */
    postTestNotificationConfiguration(req: shared.TestNotificationConfigurationRequest, security: operations.PostTestNotificationConfigurationSecurity, config?: AxiosRequestConfig): Promise<operations.PostTestNotificationConfigurationResponse>;
    /**
     * Update a notification subscription configuration
     *
     * @remarks
     * Updates an existing notification subscription configuration. If you are updating the event types, you must provide all event types, otherwise the previous event type configuration will be overwritten.
     */
    postUpdateNotificationConfiguration(req: shared.UpdateNotificationConfigurationRequest, security: operations.PostUpdateNotificationConfigurationSecurity, config?: AxiosRequestConfig): Promise<operations.PostUpdateNotificationConfigurationResponse>;
}

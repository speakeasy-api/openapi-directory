import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Push {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a registered device's update token
     *
     * @remarks
     * Delete a device details object.
     */
    deletePushDeviceDetails(req: operations.DeletePushDeviceDetailsRequest, config?: AxiosRequestConfig): Promise<operations.DeletePushDeviceDetailsResponse>;
    /**
     * List all channels with at least one subscribed device
     *
     * @remarks
     * Returns a paginated response of channel names.
     */
    getChannelsWithPushSubscribers(req: operations.GetChannelsWithPushSubscribersRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelsWithPushSubscribersResponse>;
    /**
     * Get a device registration
     *
     * @remarks
     * Get the full details of a device.
     */
    getPushDeviceDetails(req: operations.GetPushDeviceDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetPushDeviceDetailsResponse>;
    /**
     * List channel subscriptions
     *
     * @remarks
     * Get a list of push notification subscriptions to channels.
     */
    getPushSubscriptionsOnChannels(req: operations.GetPushSubscriptionsOnChannelsRequest, config?: AxiosRequestConfig): Promise<operations.GetPushSubscriptionsOnChannelsResponse>;
    /**
     * List devices registered for receiving push notifications
     *
     * @remarks
     * List of device details of devices registed for push notifications.
     */
    getRegisteredPushDevices(req: operations.GetRegisteredPushDevicesRequest, config?: AxiosRequestConfig): Promise<operations.GetRegisteredPushDevicesResponse>;
    /**
     * Update a device registration
     *
     * @remarks
     * Specific attributes of an existing registration can be updated. Only clientId, metadata and push.recipient are mutable.
     */
    patchPushDeviceDetailsForm(req: operations.PatchPushDeviceDetailsFormRequest, config?: AxiosRequestConfig): Promise<operations.PatchPushDeviceDetailsFormResponse>;
    /**
     * Update a device registration
     *
     * @remarks
     * Specific attributes of an existing registration can be updated. Only clientId, metadata and push.recipient are mutable.
     */
    patchPushDeviceDetailsJson(req: operations.PatchPushDeviceDetailsJsonRequest, config?: AxiosRequestConfig): Promise<operations.PatchPushDeviceDetailsJsonResponse>;
    /**
     * Update a device registration
     *
     * @remarks
     * Specific attributes of an existing registration can be updated. Only clientId, metadata and push.recipient are mutable.
     */
    patchPushDeviceDetailsRaw(req: operations.PatchPushDeviceDetailsRawRequest, config?: AxiosRequestConfig): Promise<operations.PatchPushDeviceDetailsRawResponse>;
    /**
     * Publish a push notification to device(s)
     *
     * @remarks
     * A convenience endpoint to deliver a push notification payload to a single device or set of devices identified by their client identifier.
     */
    publishPushNotificationToDevicesForm(req: operations.PublishPushNotificationToDevicesFormRequest, config?: AxiosRequestConfig): Promise<operations.PublishPushNotificationToDevicesFormResponse>;
    /**
     * Publish a push notification to device(s)
     *
     * @remarks
     * A convenience endpoint to deliver a push notification payload to a single device or set of devices identified by their client identifier.
     */
    publishPushNotificationToDevicesJson(req: operations.PublishPushNotificationToDevicesJsonRequest, config?: AxiosRequestConfig): Promise<operations.PublishPushNotificationToDevicesJsonResponse>;
    /**
     * Publish a push notification to device(s)
     *
     * @remarks
     * A convenience endpoint to deliver a push notification payload to a single device or set of devices identified by their client identifier.
     */
    publishPushNotificationToDevicesRaw(req: operations.PublishPushNotificationToDevicesRawRequest, config?: AxiosRequestConfig): Promise<operations.PublishPushNotificationToDevicesRawResponse>;
    /**
     * Update a device registration
     *
     * @remarks
     * Device registrations can be upserted (the existing registration is replaced entirely) with a PUT operation. Only clientId, metadata and push.recipient are mutable.
     */
    putPushDeviceDetailsForm(req: operations.PutPushDeviceDetailsFormRequest, config?: AxiosRequestConfig): Promise<operations.PutPushDeviceDetailsFormResponse>;
    /**
     * Update a device registration
     *
     * @remarks
     * Device registrations can be upserted (the existing registration is replaced entirely) with a PUT operation. Only clientId, metadata and push.recipient are mutable.
     */
    putPushDeviceDetailsJson(req: operations.PutPushDeviceDetailsJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutPushDeviceDetailsJsonResponse>;
    /**
     * Update a device registration
     *
     * @remarks
     * Device registrations can be upserted (the existing registration is replaced entirely) with a PUT operation. Only clientId, metadata and push.recipient are mutable.
     */
    putPushDeviceDetailsRaw(req: operations.PutPushDeviceDetailsRawRequest, config?: AxiosRequestConfig): Promise<operations.PutPushDeviceDetailsRawResponse>;
    /**
     * Register a device for receiving push notifications
     *
     * @remarks
     * Register a device’s details, including the information necessary to deliver push notifications to it. Requires "push-admin" capability.
     */
    registerPushDeviceJson(req: operations.RegisterPushDeviceJsonRequest, config?: AxiosRequestConfig): Promise<operations.RegisterPushDeviceJsonResponse>;
    /**
     * Register a device for receiving push notifications
     *
     * @remarks
     * Register a device’s details, including the information necessary to deliver push notifications to it. Requires "push-admin" capability.
     */
    registerPushDeviceRaw(req: operations.RegisterPushDeviceRawRequest, config?: AxiosRequestConfig): Promise<operations.RegisterPushDeviceRawResponse>;
    /**
     * Subscribe a device to a channel
     *
     * @remarks
     * Subscribe either a single device or all devices associated with a client ID to receive push notifications from messages sent to a channel.
     */
    subscribePushDeviceToChannelForm(req: operations.SubscribePushDeviceToChannelFormRequest, config?: AxiosRequestConfig): Promise<operations.SubscribePushDeviceToChannelFormResponse>;
    /**
     * Subscribe a device to a channel
     *
     * @remarks
     * Subscribe either a single device or all devices associated with a client ID to receive push notifications from messages sent to a channel.
     */
    subscribePushDeviceToChannelJson(req: operations.SubscribePushDeviceToChannelJsonRequest, config?: AxiosRequestConfig): Promise<operations.SubscribePushDeviceToChannelJsonResponse>;
    /**
     * Subscribe a device to a channel
     *
     * @remarks
     * Subscribe either a single device or all devices associated with a client ID to receive push notifications from messages sent to a channel.
     */
    subscribePushDeviceToChannelRaw(req: operations.SubscribePushDeviceToChannelRawRequest, config?: AxiosRequestConfig): Promise<operations.SubscribePushDeviceToChannelRawResponse>;
    /**
     * Unregister matching devices for push notifications
     *
     * @remarks
     * Unregisters devices. All their subscriptions for receiving push notifications through channels will also be deleted.
     */
    unregisterAllPushDevices(req: operations.UnregisterAllPushDevicesRequest, config?: AxiosRequestConfig): Promise<operations.UnregisterAllPushDevicesResponse>;
    /**
     * Unregister a single device for push notifications
     *
     * @remarks
     * Unregisters a single device by its device ID. All its subscriptions for receiving push notifications through channels will also be deleted.
     */
    unregisterPushDevice(req: operations.UnregisterPushDeviceRequest, config?: AxiosRequestConfig): Promise<operations.UnregisterPushDeviceResponse>;
    /**
     * Reset a registered device's update token
     *
     * @remarks
     * Gets an updated device details object.
     */
    updatePushDeviceDetails(req: operations.UpdatePushDeviceDetailsRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePushDeviceDetailsResponse>;
}

import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Push {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deletePushDeviceDetails - Delete a registered device's update token
     *
     * Delete a device details object.
    **/
    deletePushDeviceDetails(req: operations.DeletePushDeviceDetailsRequest, config?: AxiosRequestConfig): Promise<operations.DeletePushDeviceDetailsResponse>;
    /**
     * getChannelsWithPushSubscribers - List all channels with at least one subscribed device
     *
     * Returns a paginated response of channel names.
    **/
    getChannelsWithPushSubscribers(req: operations.GetChannelsWithPushSubscribersRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelsWithPushSubscribersResponse>;
    /**
     * getPushDeviceDetails - Get a device registration
     *
     * Get the full details of a device.
    **/
    getPushDeviceDetails(req: operations.GetPushDeviceDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetPushDeviceDetailsResponseOutput>;
    /**
     * getPushSubscriptionsOnChannels - List channel subscriptions
     *
     * Get a list of push notification subscriptions to channels.
    **/
    getPushSubscriptionsOnChannels(req: operations.GetPushSubscriptionsOnChannelsRequest, config?: AxiosRequestConfig): Promise<operations.GetPushSubscriptionsOnChannelsResponseOutput>;
    /**
     * getRegisteredPushDevices - List devices registered for receiving push notifications
     *
     * List of device details of devices registed for push notifications.
    **/
    getRegisteredPushDevices(req: operations.GetRegisteredPushDevicesRequest, config?: AxiosRequestConfig): Promise<operations.GetRegisteredPushDevicesResponseOutput>;
    /**
     * patchPushDeviceDetails - Update a device registration
     *
     * Specific attributes of an existing registration can be updated. Only clientId, metadata and push.recipient are mutable.
    **/
    patchPushDeviceDetails(req: operations.PatchPushDeviceDetailsRequest, config?: AxiosRequestConfig): Promise<operations.PatchPushDeviceDetailsResponseOutput>;
    /**
     * putPushDeviceDetails - Update a device registration
     *
     * Device registrations can be upserted (the existing registration is replaced entirely) with a PUT operation. Only clientId, metadata and push.recipient are mutable.
    **/
    putPushDeviceDetails(req: operations.PutPushDeviceDetailsRequest, config?: AxiosRequestConfig): Promise<operations.PutPushDeviceDetailsResponseOutput>;
    /**
     * registerPushDevice - Register a device for receiving push notifications
     *
     * Register a device’s details, including the information necessary to deliver push notifications to it. Requires "push-admin" capability.
    **/
    registerPushDevice(req: operations.RegisterPushDeviceRequest, config?: AxiosRequestConfig): Promise<operations.RegisterPushDeviceResponseOutput>;
    /**
     * subscribePushDeviceToChannel - Subscribe a device to a channel
     *
     * Subscribe either a single device or all devices associated with a client ID to receive push notifications from messages sent to a channel.
    **/
    subscribePushDeviceToChannel(req: operations.SubscribePushDeviceToChannelRequest, config?: AxiosRequestConfig): Promise<operations.SubscribePushDeviceToChannelResponse>;
    /**
     * unregisterAllPushDevices - Unregister matching devices for push notifications
     *
     * Unregisters devices. All their subscriptions for receiving push notifications through channels will also be deleted.
    **/
    unregisterAllPushDevices(req: operations.UnregisterAllPushDevicesRequest, config?: AxiosRequestConfig): Promise<operations.UnregisterAllPushDevicesResponse>;
    /**
     * unregisterPushDevice - Unregister a single device for push notifications
     *
     * Unregisters a single device by its device ID. All its subscriptions for receiving push notifications through channels will also be deleted.
    **/
    unregisterPushDevice(req: operations.UnregisterPushDeviceRequest, config?: AxiosRequestConfig): Promise<operations.UnregisterPushDeviceResponse>;
    /**
     * updatePushDeviceDetails - Reset a registered device's update token
     *
     * Gets an updated device details object.
    **/
    updatePushDeviceDetails(req: operations.UpdatePushDeviceDetailsRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePushDeviceDetailsResponseOutput>;
}

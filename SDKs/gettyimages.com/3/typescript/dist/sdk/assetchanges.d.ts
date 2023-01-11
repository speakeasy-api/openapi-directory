import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AssetChanges {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteV3AssetChangesChangeSetsChangeSetId - Confirm asset change notifications.
     *
     * # Delete Asset Changes
     *
     * Confirm asset changes acknowledges receipt of asset changes (from the PUT asset changes endpoint).
     *
     * ##  Quickstart
     *
     * You'll need an API key and an access token to use this resource.
     *
    **/
    deleteV3AssetChangesChangeSetsChangeSetId(req: operations.DeleteV3AssetChangesChangeSetsChangeSetIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteV3AssetChangesChangeSetsChangeSetIdResponse>;
    /**
     * getV3AssetChangesChannels - Get a list of asset change notification channels.
     *
     * # Get Partner Channels
     *
     * Retrieves the channel data for the partner. This data can be used to populate the channel_id parameter in the Put Asset Changes query.
     *
     * ##  Quickstart
     *
     * You'll need an API key and an access token to use this resource.
     *
     * Partners who have a channel that has been removed should contact their sales representative to be set up again.
     *
     *
    **/
    getV3AssetChangesChannels(config?: AxiosRequestConfig): Promise<operations.GetV3AssetChangesChannelsResponse>;
    /**
     * putV3AssetChangesChangeSets - Get asset change notifications.
     *
     * # Asset Changes
     *
     * Get notifications about new, updated or deleted assets.
     *
     * ##  Quickstart
     *
     * You'll need an API key and an access token to use this resource.
     *
     * Notifications older than 60 days will be removed from partner channels.
     *
    **/
    putV3AssetChangesChangeSets(req: operations.PutV3AssetChangesChangeSetsRequest, config?: AxiosRequestConfig): Promise<operations.PutV3AssetChangesChangeSetsResponse>;
}

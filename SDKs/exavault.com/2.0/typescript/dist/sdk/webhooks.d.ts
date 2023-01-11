import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Webhooks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addWebhook - Add A New Webhook
     *
     * Create a new Webhook on your account. Creating a Webhook will require an endpoint URL, a path, what events should trigger a webhook, and what request version to use.
    **/
    addWebhook(req: operations.AddWebhookRequest, config?: AxiosRequestConfig): Promise<operations.AddWebhookResponse>;
    /**
     * deleteWebhook - Delete a webhook
     *
     * Deleted the specified webhook. This will not affect logs or any resources the webhook is connected to.
    **/
    deleteWebhook(req: operations.DeleteWebhookRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWebhookResponse>;
    /**
     * getWebhookById - Get info for a webhook
     *
     * Returns the metadata for a specific webhook. Webhook IDs can be retrieve from GET /webhooks
    **/
    getWebhookById(req: operations.GetWebhookByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetWebhookByIdResponse>;
    /**
     * getWehooksList - Get Webhooks List
     *
     * Returns a list of Webhooks. By default, this will return metadata on all Webhooks within the account.
    **/
    getWehooksList(req: operations.GetWehooksListRequest, config?: AxiosRequestConfig): Promise<operations.GetWehooksListResponse>;
    /**
     * regenerateWebhookToken - Regenerate security token
     *
     * This endpoint will allow you to regenerate the security token for a webhook if you believe it’s been compromised in any way.
    **/
    regenerateWebhookToken(req: operations.RegenerateWebhookTokenRequest, config?: AxiosRequestConfig): Promise<operations.RegenerateWebhookTokenResponse>;
    /**
     * resendWebhookActivityEntry - Resend a webhook message
     *
     * This endpoint will allow you to resend a webhook that was previously sent. Resent webhooks will send exactly the same as the original webhook with the exception of the “sent” timestamp. Activity IDs can be retrieve from the webhook logs in your account or via GET /activity/webhooks
    **/
    resendWebhookActivityEntry(req: operations.ResendWebhookActivityEntryRequest, config?: AxiosRequestConfig): Promise<operations.ResendWebhookActivityEntryResponse>;
    /**
     * updateWebhook - Update a webhook
     *
     * Update the specified webhook. Updated webhooks will take effect immediately and could impact active workflows. Please be certain the webhook is not currently in use prior to updating.
     *
     * You only need to send the portions of the webhook configuration you wish to change, rather than the entire webhook object.
    **/
    updateWebhook(req: operations.UpdateWebhookRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWebhookResponse>;
}

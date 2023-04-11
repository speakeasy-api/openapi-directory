import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Administration {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a client
     */
    deleteClientsIdClient(req: operations.DeleteClientsIdClientRequest, config?: AxiosRequestConfig): Promise<operations.DeleteClientsIdClientResponse>;
    /**
     * Delete the client logo
     */
    deleteClientsIdClientLogo(req: operations.DeleteClientsIdClientLogoRequest, config?: AxiosRequestConfig): Promise<operations.DeleteClientsIdClientLogoResponse>;
    /**
     * Deletes all webhooks
     *
     * @remarks
     * Updates the deleted field with the date of the deletion<br><br>
     */
    deleteWebhooks(req: operations.DeleteWebhooksRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWebhooksResponse>;
    /**
     * Deletes all webhook authentication types
     */
    deleteWebhooksAuth(req: operations.DeleteWebhooksAuthRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWebhooksAuthResponse>;
    /**
     * Deletes the webhook authentication type
     *
     * @remarks
     * Updates the deleted field with the date of the deletion<br><br>
     */
    deleteWebhooksAuthIdAuth(req: operations.DeleteWebhooksAuthIdAuthRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWebhooksAuthIdAuthResponse>;
    /**
     * Deletes a webhook
     *
     * @remarks
     * Updates the deleted field with the date of the deletion<br><br>
     */
    deleteWebhooksIdWebhook(req: operations.DeleteWebhooksIdWebhookRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWebhooksIdWebhookResponse>;
    /**
     * delete all entries
     */
    deleteWebhooksIdWebhookAddToData(req: operations.DeleteWebhooksIdWebhookAddToDataRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWebhooksIdWebhookAddToDataResponse>;
    /**
     * delete the requested entry
     */
    deleteWebhooksIdWebhookAddToDataKey(req: operations.DeleteWebhooksIdWebhookAddToDataKeyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWebhooksIdWebhookAddToDataKeyResponse>;
    /**
     * List clients
     */
    getClients(req: operations.GetClientsRequest, config?: AxiosRequestConfig): Promise<operations.GetClientsResponse>;
    /**
     * Get information about a client
     *
     * @remarks
     * If you use the manage_token or a configuration token, you will get also the client secret.<br><br>
     */
    getClientsIdClient(req: operations.GetClientsIdClientRequest, config?: AxiosRequestConfig): Promise<operations.GetClientsIdClientResponse>;
    /**
     * Get configuration of the API.
     *
     * @remarks
     * <br><br>
     */
    getConfig(req: operations.GetConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetConfigResponse>;
    /**
     * Get configuration change history of the API.
     *
     * @remarks
     * <br><br>
     */
    getConfigLogs(req: operations.GetConfigLogsRequest, config?: AxiosRequestConfig): Promise<operations.GetConfigLogsResponse>;
    /**
     * get performances stats on this instance
     */
    getMonitoring(req: operations.GetMonitoringRequest, config?: AxiosRequestConfig): Promise<operations.GetMonitoringResponse>;
    /**
     * Get public encryption key of the API.
     */
    getPublickey(config?: AxiosRequestConfig): Promise<operations.GetPublickeyResponse>;
    /**
     * Get webhooks
     */
    getWebhooks(req: operations.GetWebhooksRequest, config?: AxiosRequestConfig): Promise<operations.GetWebhooksResponse>;
    /**
     * Get webhooks authentication types
     */
    getWebhooksAuth(req: operations.GetWebhooksAuthRequest, config?: AxiosRequestConfig): Promise<operations.GetWebhooksAuthResponse>;
    /**
     * retrieve the list of the value to add in webhooks when sending the requested webhook
     */
    getWebhooksIdWebhookAddToData(req: operations.GetWebhooksIdWebhookAddToDataRequest, config?: AxiosRequestConfig): Promise<operations.GetWebhooksIdWebhookAddToDataResponse>;
    /**
     * retrieve the value to add in the requested webhook for the requested name
     */
    getWebhooksIdWebhookAddToDataKey(req: operations.GetWebhooksIdWebhookAddToDataKeyRequest, config?: AxiosRequestConfig): Promise<operations.GetWebhooksIdWebhookAddToDataKeyResponse>;
    /**
     * Get webhooks logs.
     *
     * @remarks
     * Get logs of the webhooks.<br><br>By default, it selects logs for the last month. You can use "min_date" and "max_date" to change boundary dates.<br><br>
     */
    getWebhooksIdWebhookLogs(req: operations.GetWebhooksIdWebhookLogsRequest, config?: AxiosRequestConfig): Promise<operations.GetWebhooksIdWebhookLogsResponse>;
    /**
     * Create a client
     */
    postClients(req: operations.PostClientsRequest, config?: AxiosRequestConfig): Promise<operations.PostClientsResponse>;
    /**
     * Update the client logo
     */
    postClientsIdClientLogo(req: operations.PostClientsIdClientLogoRequest, config?: AxiosRequestConfig): Promise<operations.PostClientsIdClientLogoResponse>;
    /**
     * Insert/update configuration key(s)/value(s) on the API.
     */
    postConfig(config?: AxiosRequestConfig): Promise<operations.PostConfigResponse>;
    /**
     * Test synchronization on a random connection.
     *
     * @remarks
     * It can be used to test receiving data on your webhooks.<br><br>
     */
    postTestSync(config?: AxiosRequestConfig): Promise<operations.PostTestSyncResponse>;
    /**
     * Test synchronization on a random connection.
     *
     * @remarks
     * It can be used to test receiving data on your webhooks.<br><br>
     */
    postTestWebhooks(config?: AxiosRequestConfig): Promise<operations.PostTestWebhooksResponse>;
    /**
     * Adds a new webhook
     */
    postWebhooks(req: operations.PostWebhooksRequest, config?: AxiosRequestConfig): Promise<operations.PostWebhooksResponse>;
    /**
     * Adds a new webhook authentication type
     */
    postWebhooksAuth(req: operations.PostWebhooksAuthRequest, config?: AxiosRequestConfig): Promise<operations.PostWebhooksAuthResponse>;
    /**
     * Updates the webhook authentication type
     */
    postWebhooksAuthIdAuth(req: operations.PostWebhooksAuthIdAuthRequest, config?: AxiosRequestConfig): Promise<operations.PostWebhooksAuthIdAuthResponse>;
    /**
     * Updates a webhook
     */
    postWebhooksIdWebhook(req: operations.PostWebhooksIdWebhookRequest, config?: AxiosRequestConfig): Promise<operations.PostWebhooksIdWebhookResponse>;
    /**
     * Setup a field to store in user config when calling the endpoint
     *
     * @remarks
     * For each parameter, a value will be added in the webhook data. Use the key to set the name of the field. The values that can be added are to be found in the user configuration.<br><br>
     */
    postWebhooksIdWebhookAddToData(req: operations.PostWebhooksIdWebhookAddToDataRequest, config?: AxiosRequestConfig): Promise<operations.PostWebhooksIdWebhookAddToDataResponse>;
    /**
     * upate the requested field to store in user config when calling the endpoint
     *
     * @remarks
     * For each parameter, a value will be added in the webhook data. Use the key to set the name of the field. The values that can be added are to be found in the user configuration.<br><br>
     */
    postWebhooksIdWebhookAddToDataKey(req: operations.PostWebhooksIdWebhookAddToDataKeyRequest, config?: AxiosRequestConfig): Promise<operations.PostWebhooksIdWebhookAddToDataKeyResponse>;
    /**
     * Update a client
     */
    putClientsIdClient(req: operations.PutClientsIdClientRequest, config?: AxiosRequestConfig): Promise<operations.PutClientsIdClientResponse>;
    /**
     * Updates the webhook authentication type
     */
    putWebhooksAuthIdAuth(req: operations.PutWebhooksAuthIdAuthRequest, config?: AxiosRequestConfig): Promise<operations.PutWebhooksAuthIdAuthResponse>;
    /**
     * Updates a webhook
     */
    putWebhooksIdWebhook(req: operations.PutWebhooksIdWebhookRequest, config?: AxiosRequestConfig): Promise<operations.PutWebhooksIdWebhookResponse>;
}

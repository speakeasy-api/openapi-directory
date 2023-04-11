import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Webhooks allow you to subscribe to notifications about events that occur on Asana resources (e.g., tasks, projects, stories, etc.).
 *
 * @remarks
 *
 * For a more detailed explanation of webhooks see the [overview of webhooks](/docs/overview-of-webhooks).
 */
export declare class Webhooks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Establish a webhook
     *
     * @remarks
     * Establishing a webhook is a two-part process. First, a simple HTTP POST
     * request initiates the creation similar to creating any other resource.
     *
     * Next, in the middle of this request comes the confirmation handshake.
     * When a webhook is created, we will send a test POST to the target with an
     * `X-Hook-Secret` header. The target must respond with a `200 OK` or `204
     * No Content` and a matching `X-Hook-Secret` header to confirm that this
     * webhook subscription is indeed expected. We strongly recommend storing
     * this secret to be used to verify future webhook event signatures.
     *
     * The POST request to create the webhook will then return with the status
     * of the request. If you do not acknowledge the webhook’s confirmation
     * handshake it will fail to setup, and you will receive an error in
     * response to your attempt to create it. This means you need to be able to
     * receive and complete the webhook *while* the POST request is in-flight
     * (in other words, have a server that can handle requests asynchronously).
     *
     * Invalid hostnames like localhost will recieve a 403 Forbidden status code.
     *
     * ```
     * # Request
     * curl -H "Authorization: Bearer <personal_access_token>" \
     * -X POST https://app.asana.com/api/1.0/webhooks \
     * -d "resource=8675309" \
     * -d "target=https://example.com/receive-webhook/7654"
     * ```
     *
     * ```
     * # Handshake sent to https://example.com/
     * POST /receive-webhook/7654
     * X-Hook-Secret: b537207f20cbfa02357cf448134da559e8bd39d61597dcd5631b8012eae53e81
     * ```
     *
     * ```
     * # Handshake response sent by example.com
     * HTTP/1.1 200
     * X-Hook-Secret: b537207f20cbfa02357cf448134da559e8bd39d61597dcd5631b8012eae53e81
     * ```
     *
     * ```
     * # Response
     * HTTP/1.1 201
     * {
     *   "data": {
     *     "gid": "43214",
     *     "resource": {
     *       "gid": "8675309",
     *       "name": "Bugs"
     *     },
     *     "target": "https://example.com/receive-webhook/7654",
     *     "active": false,
     *     "last_success_at": null,
     *     "last_failure_at": null,
     *     "last_failure_content": null
     *   }
     * }
     * ```
     */
    createWebhook(req: operations.CreateWebhookRequest, config?: AxiosRequestConfig): Promise<operations.CreateWebhookResponse>;
    /**
     * Delete a webhook
     *
     * @remarks
     * This method *permanently* removes a webhook. Note that it may be possible to receive a request that was already in flight after deleting the webhook, but no further requests will be issued.
     */
    deleteWebhook(req: operations.DeleteWebhookRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWebhookResponse>;
    /**
     * Get a webhook
     *
     * @remarks
     * Returns the full record for the given webhook.
     */
    getWebhook(req: operations.GetWebhookRequest, config?: AxiosRequestConfig): Promise<operations.GetWebhookResponse>;
    /**
     * Get multiple webhooks
     *
     * @remarks
     * Get the compact representation of all webhooks your app has registered for the authenticated user in the given workspace.
     */
    getWebhooks(req: operations.GetWebhooksRequest, config?: AxiosRequestConfig): Promise<operations.GetWebhooksResponse>;
    /**
     * Update a webhook
     *
     * @remarks
     * An existing webhook's filters can be updated by making a PUT request on the URL for that webhook. Note that the webhook's previous `filters` array will be completely overwritten by the `filters` sent in the PUT request.
     */
    updateWebhook(req: operations.UpdateWebhookRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWebhookResponse>;
}

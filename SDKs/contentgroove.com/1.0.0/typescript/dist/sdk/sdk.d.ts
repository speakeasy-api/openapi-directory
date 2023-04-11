import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.contentgroove.com"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * # Overview
 *
 * @remarks
 *
 * The ContentGroove Developer API enables you to add the power of ContentGroove's video AI to your own applications and workflows.
 *
 * Webhooks are a way for ContentGroove to send video information
 * to your application, to update your system and/or trigger other business processes.
 *
 * You can use Webhooks and the Developer API separately or together.
 *
 * # Getting Started with Webhooks
 *
 * - Sign up for an account at [app.contentgroove.com](https://app.contentgroove.com)
 * - Read "Using Webhooks" on the [API Reference page](https://developers.contentgroove.com/api_reference)
 * - Visit the [Webhooks page](https://app.contentgroove.com/webhook_subscriptions) and create a new webhook
 *
 * # Using Webhooks
 *
 * Webhooks, also known as callbacks, are a way for ContentGroove to notify your application as soon as possible after an event has occurred in ContentGroove.
 * For example after a media completes processing, ContentGroove can use a webhook to notify your application with information about the video: Suggested clips, transcription, and so on.
 * You can use the information sent to update your system and/or use the
 * webhook to trigger other business processes.
 *
 * The webhook request is sent as an HTTP POST containing a payload of JSON-formatted data.
 * For the details of the payload format see the "CALLBACKS" sections below.
 *
 * When your application receives the webhook request, it must respond with
 * a 200 HTTP status code (success).
 * If a 200 HTTP status code is not returned,
 * ContentGroove will assume that the webhook was not delivered and
 * will retry a limited number of times, using an exponential backoff algorithm.
 *
 * ContentGroove makes a best effort to attempt to send the webhook at
 * least once.
 * Applications receiving webhooks must tolerate the
 * possibility of a single webhook payload being sent more than once
 * (idempotent behavior).
 * Applications receiving webhooks should tolerate the possibility that
 * a webhook could not be delivered
 * (for example your application was down when delivery was attempted).
 *
 * # Getting Started with the Developer API
 *
 * - Sign up for an account at [app.contentgroove.com](https://app.contentgroove.com)
 * - Visit the [API Keys page](https://app.contentgroove.com/api_keys)
 *   - Create a new API Key then copy and save the value.
 *     > ⚠️ **IMPORTANT**: This API Key is intended only for use on the server side. Be sure never to use a server-side API Key in client-side (web, mobile, or otherwise) code. ⚠️
 * - View all available endpoints, and try the API, on our [API Reference page](https://developers.contentgroove.com/api_reference)
 *
 * # Using the Developer API
 *
 * - Create a new media (video or audio) in ContentGroove
 *   - If the video or audio is available from a URL, you can create a media by providing the `source_url` parameter. ContentGroove will fetch the video or audio from the URL if possible.
 *   - Or, you can create a media from a video or audio file which you upload directly to ContentGroove (see File Uploading section below).
 * - After the new media is created, at first it will be in a "processing" state.
 *   Depending on the size and duration of the video or audio file, it will take some time for processing to complete.
 *   - You can use ContentGroove Webhooks to be notified immediately when processing has completed. (Details coming soon.)
 *   - You can also use the API to read the state of the media, to determine if the media has completed processing yet.
 * - After the media has completed processing, you can access all of these details about the media:
 *   - The media name and description
 *   - The transcription of spoken words
 *   - Topics and keywords which were discussed in the transcription
 *   - Suggested video clips are automatically created
 * - In addition to the automatically created video clips, you can create more video clips from the media
 *
 * # Response Codes
 *
 * The following is a comprehensive list of the status codes you may receive while using the ContentGroove API:
 *
 * - 200 "Ok"
 *   - The request was valid
 * - 400 "Bad Request
 *   - This is returned when there was a problem parsing the JSON body of your request if you supplied the 'Content-Type': 'application/json' header, or if your request is missing the 'Content-Type' header altogether
 * - 401 "Unauthorized"
 *   - This is returned when you are attempting to perform an action on a resource that you are not authorized to do
 * - 402 "Payment Required"
 *   - This is returned when you are attempting to perform an action that would push your account above a usage limit. You can view your usage at: https://app.contentgroove.com/quota_usage
 * - 404 "Not Found"
 *   - This is returned when the resource you are trying to view does not exist
 * - 429 "Too Many Requests"
 *   - This is returned when you have performed too many requests within a given period of time
 * - 500 "Internal Server Error"
 *   - This is returned when your request was valid but there was a problem on our end
 *
 * # File Uploading
 *
 * - Step 1: Make a GET request to the direct uploads URL endpoint (/api/v1/direct_uploads) to receive an upload URL to upload the file to and an upload id.
 * - Step 2: Make a PUT request with the file as the body to the upload URL received in step 1. The response will have a 200 status with no body if the upload is successful.
 *   ```
 *   curl -T /path/to/file upload_url
 *   ```
 * - Step 3: After uploading the file to the upload URL, make a POST request to the create medias endpoint (/api/v1/medias), with the upload id and optionally a name and description for the new media.
 *   > At this time, file uploads are limited to 5gb per file.
 *
 * # Allowed media types
 *
 * Video:
 *
 * - Supported: Most common video formats and codecs are supported.
 * - Recommended: mp4
 *
 * Audio:
 *
 * - Supported: aac, mp3, flac, ogg, wav, and wma
 * - Recommended: aac
 *
 * # Authentication
 *
 * You can use the API Key to authenticate your API requests using any of these methods. (Replace abc123 with your actual API Key.)
 *
 * - Request header `Authorization: Bearer abc123`
 * - Request header `X-API-KEY: abc123`
 * - Query parameter `api_key=abc123`
 *   > ⚠️ **IMPORTANT**: This API Key is intended only for use on the server side. Be sure never to use a server-side API Key in client-side (web, mobile, or otherwise) code. ⚠️
 *
 * # Link to openapi.json spec
 *
 * - https://api.contentgroove.com/api-docs/v1/openapi.json
 *
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * delete clip
     */
    deleteApiV1ClipsId(req: operations.DeleteApiV1ClipsIdRequest, security: operations.DeleteApiV1ClipsIdSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteApiV1ClipsIdResponse>;
    /**
     * delete media
     */
    deleteApiV1MediasId(req: operations.DeleteApiV1MediasIdRequest, security: operations.DeleteApiV1MediasIdSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteApiV1MediasIdResponse>;
    /**
     * delete webhook subscription
     */
    deleteApiV1WebhookSubscriptionsId(req: operations.DeleteApiV1WebhookSubscriptionsIdRequest, security: operations.DeleteApiV1WebhookSubscriptionsIdSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteApiV1WebhookSubscriptionsIdResponse>;
    /**
     * list clips
     */
    getApiV1Clips(req: operations.GetApiV1ClipsRequest, security: operations.GetApiV1ClipsSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1ClipsResponse>;
    /**
     * show clip
     */
    getApiV1ClipsId(req: operations.GetApiV1ClipsIdRequest, security: operations.GetApiV1ClipsIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1ClipsIdResponse>;
    /**
     * prepare presigned upload url
     */
    getApiV1DirectUploads(config?: AxiosRequestConfig): Promise<operations.GetApiV1DirectUploadsResponse>;
    /**
     * list medias
     */
    getApiV1Medias(req: operations.GetApiV1MediasRequest, security: operations.GetApiV1MediasSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1MediasResponse>;
    /**
     * show media
     */
    getApiV1MediasId(req: operations.GetApiV1MediasIdRequest, security: operations.GetApiV1MediasIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1MediasIdResponse>;
    /**
     * list webhook subscriptions
     */
    getApiV1WebhookSubscriptions(req: operations.GetApiV1WebhookSubscriptionsRequest, security: operations.GetApiV1WebhookSubscriptionsSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1WebhookSubscriptionsResponse>;
    /**
     * show webhook subscription
     */
    getApiV1WebhookSubscriptionsId(req: operations.GetApiV1WebhookSubscriptionsIdRequest, security: operations.GetApiV1WebhookSubscriptionsIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1WebhookSubscriptionsIdResponse>;
    /**
     * create clip
     */
    postApiV1Clips(req: operations.PostApiV1ClipsRequestBody, security: operations.PostApiV1ClipsSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1ClipsResponse>;
    /**
     * create media
     */
    postApiV1Medias(req: operations.PostApiV1MediasRequestBody, security: operations.PostApiV1MediasSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1MediasResponse>;
    /**
     * create webhook subscription
     */
    postApiV1WebhookSubscriptions(req: operations.PostApiV1WebhookSubscriptionsRequestBody, security: operations.PostApiV1WebhookSubscriptionsSecurity, config?: AxiosRequestConfig): Promise<operations.PostApiV1WebhookSubscriptionsResponse>;
    /**
     * update clip
     */
    putApiV1ClipsId(req: operations.PutApiV1ClipsIdRequest, security: operations.PutApiV1ClipsIdSecurity, config?: AxiosRequestConfig): Promise<operations.PutApiV1ClipsIdResponse>;
    /**
     * update media
     */
    putApiV1MediasId(req: operations.PutApiV1MediasIdRequest, security: operations.PutApiV1MediasIdSecurity, config?: AxiosRequestConfig): Promise<operations.PutApiV1MediasIdResponse>;
}

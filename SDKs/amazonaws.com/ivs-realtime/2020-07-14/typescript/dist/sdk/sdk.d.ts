import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://ivsrealtime.{region}.amazonaws.com", "https://ivsrealtime.{region}.amazonaws.com", "http://ivsrealtime.{region}.amazonaws.com.cn", "https://ivsrealtime.{region}.amazonaws.com.cn"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
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
 * <p> <b>Introduction</b> </p> <p>The Amazon Interactive Video Service (IVS) stage API is REST compatible, using a standard HTTP API and an AWS EventBridge event stream for responses. JSON is used for both requests and responses, including errors. </p> <p>Terminology: The IVS stage API sometimes is referred to as the IVS RealTime API.</p> <p> <b>Resources</b> </p> <p>The following resources contain information about your IVS live stream (see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/getting-started.html">Getting Started with Amazon IVS</a>):</p> <ul> <li> <p> <b>Stage</b> — A stage is a virtual space where multiple participants can exchange audio and video in real time.</p> </li> </ul> <p> <b>Tagging</b> </p> <p>A <i>tag</i> is a metadata label that you assign to an AWS resource. A tag comprises a <i>key</i> and a <i>value</i>, both set by you. For example, you might set a tag as <code>topic:nature</code> to label a particular video category. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a> for more information, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS stages has no service-specific constraints beyond what is documented there.</p> <p>Tags can help you identify and organize your AWS resources. For example, you can use the same tag for different resources to indicate that they are related. You can also use tags to manage access (see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Access Tags</a>).</p> <p>The Amazon IVS stage API has these tag-related endpoints: <a>TagResource</a>, <a>UntagResource</a>, and <a>ListTagsForResource</a>. The following resource supports tagging: Stage.</p> <p>At most 50 tags can be applied to a resource.</p> <p> <b>Stages Endpoints</b> </p> <ul> <li> <p> <a>CreateParticipantToken</a> — Creates an additional token for a specified stage. This can be done after stage creation or when tokens expire.</p> </li> <li> <p> <a>CreateStage</a> — Creates a new stage (and optionally participant tokens).</p> </li> <li> <p> <a>DeleteStage</a> — Shuts down and deletes the specified stage (disconnecting all participants).</p> </li> <li> <p> <a>DisconnectParticipant</a> — Disconnects a specified participant and revokes the participant permanently from a specified stage.</p> </li> <li> <p> <a>GetStage</a> — Gets information for the specified stage.</p> </li> <li> <p> <a>ListStages</a> — Gets summary information about all stages in your account, in the AWS region where the API request is processed.</p> </li> <li> <p> <a>UpdateStage</a> — Updates a stage’s configuration.</p> </li> </ul> <p> <b>Tags Endpoints</b> </p> <ul> <li> <p> <a>ListTagsForResource</a> — Gets information about AWS tags for the specified ARN.</p> </li> <li> <p> <a>TagResource</a> — Adds or updates tags for the AWS resource with the specified ARN.</p> </li> <li> <p> <a>UntagResource</a> — Removes tags from the resource with the specified ARN.</p> </li> </ul>
 *
 * @see {@link https://docs.aws.amazon.com/ivsrealtime/} - Amazon Web Services documentation
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
     * <p>Creates an additional token for a specified stage. This can be done after stage creation or when tokens expire. Tokens always are scoped to the stage for which they are created.</p> <p>Encryption keys are owned by Amazon IVS and never used directly by your application.</p>
     */
    createParticipantToken(req: operations.CreateParticipantTokenRequest, config?: AxiosRequestConfig): Promise<operations.CreateParticipantTokenResponse>;
    /**
     * Creates a new stage (and optionally participant tokens).
     */
    createStage(req: operations.CreateStageRequest, config?: AxiosRequestConfig): Promise<operations.CreateStageResponse>;
    /**
     * Shuts down and deletes the specified stage (disconnecting all participants).
     */
    deleteStage(req: operations.DeleteStageRequest, config?: AxiosRequestConfig): Promise<operations.DeleteStageResponse>;
    /**
     * Disconnects a specified participant and revokes the participant permanently from a specified stage.
     */
    disconnectParticipant(req: operations.DisconnectParticipantRequest, config?: AxiosRequestConfig): Promise<operations.DisconnectParticipantResponse>;
    /**
     * Gets information for the specified stage.
     */
    getStage(req: operations.GetStageRequest, config?: AxiosRequestConfig): Promise<operations.GetStageResponse>;
    /**
     * Gets summary information about all stages in your account, in the AWS region where the API request is processed.
     */
    listStages(req: operations.ListStagesRequest, config?: AxiosRequestConfig): Promise<operations.ListStagesResponse>;
    /**
     * Gets information about AWS tags for the specified ARN.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Adds or updates tags for the AWS resource with the specified ARN.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes tags from the resource with the specified ARN.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Updates a stage’s configuration.
     */
    updateStage(req: operations.UpdateStageRequest, config?: AxiosRequestConfig): Promise<operations.UpdateStageResponse>;
}

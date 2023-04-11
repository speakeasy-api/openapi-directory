import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about behaviors
 */
export declare class Behaviors {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List Behaviors by path
     *
     * @remarks
     * List Behaviors by path
     */
    behaviorListForPath(req: operations.BehaviorListForPathRequest, config?: AxiosRequestConfig): Promise<operations.BehaviorListForPathResponse>;
    /**
     * Delete Behavior
     *
     * @remarks
     * Delete Behavior
     */
    deleteBehaviorsId(req: operations.DeleteBehaviorsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBehaviorsIdResponse>;
    /**
     * List Behaviors
     *
     * @remarks
     * List Behaviors
     */
    getBehaviors(req: operations.GetBehaviorsRequest, config?: AxiosRequestConfig): Promise<operations.GetBehaviorsResponse>;
    /**
     * Show Behavior
     *
     * @remarks
     * Show Behavior
     */
    getBehaviorsId(req: operations.GetBehaviorsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetBehaviorsIdResponse>;
    /**
     * Update Behavior
     *
     * @remarks
     * Update Behavior
     */
    patchBehaviorsId(req: operations.PatchBehaviorsIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchBehaviorsIdResponse>;
    /**
     * Create Behavior
     *
     * @remarks
     * Create Behavior
     */
    postBehaviors(req: operations.PostBehaviorsRequestBody, config?: AxiosRequestConfig): Promise<operations.PostBehaviorsResponse>;
    /**
     * Test webhook.
     *
     * @remarks
     * Test webhook.
     */
    postBehaviorsWebhookTest(req: operations.PostBehaviorsWebhookTestRequestBody, config?: AxiosRequestConfig): Promise<operations.PostBehaviorsWebhookTestResponse>;
}

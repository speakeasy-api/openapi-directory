import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Queues {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteAppsAppIdQueuesQueueId - Deletes a queue
     *
     * Delete the queue with the specified queue name, from the application with the specified application ID.
    **/
    deleteAppsAppIdQueuesQueueId(req: operations.DeleteAppsAppIdQueuesQueueIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAppsAppIdQueuesQueueIdResponse>;
    /**
     * getAppsAppIdQueues - Lists queues
     *
     * Lists the queues associated with the specified application ID.
    **/
    getAppsAppIdQueues(req: operations.GetAppsAppIdQueuesRequest, config?: AxiosRequestConfig): Promise<operations.GetAppsAppIdQueuesResponse>;
    /**
     * postAppsAppIdQueues - Creates a queue
     *
     * Creates a queue for the application specified by application ID. The properties for the queue to be created are specified in the request body.
    **/
    postAppsAppIdQueues(req: operations.PostAppsAppIdQueuesRequest, config?: AxiosRequestConfig): Promise<operations.PostAppsAppIdQueuesResponse>;
}

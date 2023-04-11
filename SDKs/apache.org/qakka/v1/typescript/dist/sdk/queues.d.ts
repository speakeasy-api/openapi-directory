import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Queue management, send, get and ack.
 */
export declare class Queues {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Acknowledge that Queue Message has been processed.
     */
    ackMessage(req: operations.AckMessageRequest, config?: AxiosRequestConfig): Promise<operations.AckMessageResponse>;
    /**
     * Create new queue.
     */
    createQueue(config?: AxiosRequestConfig): Promise<operations.CreateQueueResponse>;
    /**
     * Delete Queue.
     */
    deleteQueue(req: operations.DeleteQueueRequest, config?: AxiosRequestConfig): Promise<operations.DeleteQueueResponse>;
    /**
     * Get list of all Queues.
     */
    getListOfQueues(config?: AxiosRequestConfig): Promise<operations.GetListOfQueuesResponse>;
    /**
     * Get data associated with a Queue Message.
     */
    getMessageData(req: operations.GetMessageDataRequest, config?: AxiosRequestConfig): Promise<operations.GetMessageDataResponse>;
    /**
     * Get next Queue Messages from a Queue
     */
    getNextMessages(req: operations.GetNextMessagesRequest, config?: AxiosRequestConfig): Promise<operations.GetNextMessagesResponse>;
    /**
     * Get Queue config.
     */
    getQueueConfig(req: operations.GetQueueConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetQueueConfigResponse>;
    /**
     * Send Queue Message with a binary data (blob) payload.
     */
    sendMessageBinary(req: operations.SendMessageBinaryRequest, config?: AxiosRequestConfig): Promise<operations.SendMessageBinaryResponse>;
    /**
     * Update Queue configuration.
     */
    updateQueueConfig(req: operations.UpdateQueueConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateQueueConfigResponse>;
}

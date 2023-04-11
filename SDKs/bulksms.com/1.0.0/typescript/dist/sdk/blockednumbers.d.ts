import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class BlockedNumbers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List blocked numbers
     */
    getBlockedNumbers(req: operations.GetBlockedNumbersRequest, security: operations.GetBlockedNumbersSecurity, config?: AxiosRequestConfig): Promise<operations.GetBlockedNumbersResponse>;
    /**
     * Create a blocked number
     *
     * @remarks
     * Blocked numbers are phone numbers to which your account is not permitted to send messages.
     * The numbers can be created via this API, by a recipient replying with a STOP message to one
     * of your previous SENT messages, or by a BulkSMS administrator.
     *
     * Sending a message to a blocked number will result in the message being assigned a status of
     * `FAILED.BLOCKED`. Messages sent to blocked numbers are billed to your account.
     *
     */
    postBlockedNumbers(req: string[], security: operations.PostBlockedNumbersSecurity, config?: AxiosRequestConfig): Promise<operations.PostBlockedNumbersResponse>;
}

import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Twilio {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Twilio Message Get
     */
    twilioMessageGetTwilioGet(req: operations.TwilioMessageGetTwilioGetRequest, config?: AxiosRequestConfig): Promise<operations.TwilioMessageGetTwilioGetResponse>;
    /**
     * Twilio Message Post
     */
    twilioMessagePostTwilioPost(req: operations.TwilioMessagePostTwilioPostRequest, config?: AxiosRequestConfig): Promise<operations.TwilioMessagePostTwilioPostResponse>;
}

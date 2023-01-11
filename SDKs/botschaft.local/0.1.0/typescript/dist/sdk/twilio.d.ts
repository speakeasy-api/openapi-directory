import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Twilio {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * twilioMessageGetTwilioGet - Twilio Message Get
    **/
    twilioMessageGetTwilioGet(req: operations.TwilioMessageGetTwilioGetRequest, config?: AxiosRequestConfig): Promise<operations.TwilioMessageGetTwilioGetResponse>;
    /**
     * twilioMessagePostTwilioPost - Twilio Message Post
    **/
    twilioMessagePostTwilioPost(req: operations.TwilioMessagePostTwilioPostRequest, config?: AxiosRequestConfig): Promise<operations.TwilioMessagePostTwilioPostResponse>;
}

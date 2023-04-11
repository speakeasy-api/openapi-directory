import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://workmailmessageflow.{region}.amazonaws.com", "https://workmailmessageflow.{region}.amazonaws.com", "http://workmailmessageflow.{region}.amazonaws.com.cn", "https://workmailmessageflow.{region}.amazonaws.com.cn"];
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
 * The WorkMail Message Flow API provides access to email messages as they are being sent and received by a WorkMail organization.
 *
 * @see {@link https://docs.aws.amazon.com/workmailmessageflow/} - Amazon Web Services documentation
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
     * Retrieves the raw content of an in-transit email message, in MIME format.
     */
    getRawMessageContent(req: operations.GetRawMessageContentRequest, config?: AxiosRequestConfig): Promise<operations.GetRawMessageContentResponse>;
    /**
     * <p>Updates the raw content of an in-transit email message, in MIME format.</p> <p>This example describes how to update in-transit email message. For more information and examples for using this API, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/update-with-lambda.html"> Updating message content with AWS Lambda</a>.</p> <note> <p>Updates to an in-transit message only appear when you call <code>PutRawMessageContent</code> from an AWS Lambda function configured with a synchronous <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/lambda.html#synchronous-rules"> Run Lambda</a> rule. If you call <code>PutRawMessageContent</code> on a delivered or sent message, the message remains unchanged, even though <a href="https://docs.aws.amazon.com/workmail/latest/APIReference/API_messageflow_GetRawMessageContent.html">GetRawMessageContent</a> returns an updated message. </p> </note>
     */
    putRawMessageContent(req: operations.PutRawMessageContentRequest, config?: AxiosRequestConfig): Promise<operations.PutRawMessageContentResponse>;
}

import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://polls.apiblueprint.org"];
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
 * Polls is a simple API allowing consumers to view polls and vote in them.
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
     * Create a New Question
     *
     * @remarks
     * You may create your own question using this action. It takes a JSON
     * object containing a question and a collection of answers in the
     * form of choices.
     */
    createANewQuestion(req: operations.CreateANewQuestionRequestBody, config?: AxiosRequestConfig): Promise<operations.CreateANewQuestionResponse>;
    /**
     * List All Questions
     */
    listAllQuestions(config?: AxiosRequestConfig): Promise<operations.ListAllQuestionsResponse>;
}

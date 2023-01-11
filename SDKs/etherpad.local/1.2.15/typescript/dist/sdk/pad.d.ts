import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Pad {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * appendChatMessageUsingGet - appends a chat message
    **/
    appendChatMessageUsingGet(req: operations.AppendChatMessageUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.AppendChatMessageUsingGetResponse>;
    /**
     * appendChatMessageUsingPost - appends a chat message
    **/
    appendChatMessageUsingPost(req: operations.AppendChatMessageUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.AppendChatMessageUsingPostResponse>;
    /**
     * checkTokenUsingGet - returns ok when the current api token is valid
    **/
    checkTokenUsingGet(config?: AxiosRequestConfig): Promise<operations.CheckTokenUsingGetResponse>;
    /**
     * checkTokenUsingPost - returns ok when the current api token is valid
    **/
    checkTokenUsingPost(config?: AxiosRequestConfig): Promise<operations.CheckTokenUsingPostResponse>;
    createDiffHtmlUsingGet(req: operations.CreateDiffHtmlUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.CreateDiffHtmlUsingGetResponse>;
    createDiffHtmlUsingPost(req: operations.CreateDiffHtmlUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.CreateDiffHtmlUsingPostResponse>;
    /**
     * createPadUsingGet - creates a new (non-group) pad. Note that if you need to create a group Pad, you should call createGroupPad
    **/
    createPadUsingGet(req: operations.CreatePadUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.CreatePadUsingGetResponse>;
    /**
     * createPadUsingPost - creates a new (non-group) pad. Note that if you need to create a group Pad, you should call createGroupPad
    **/
    createPadUsingPost(req: operations.CreatePadUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.CreatePadUsingPostResponse>;
    /**
     * deletePadUsingGet - deletes a pad
    **/
    deletePadUsingGet(req: operations.DeletePadUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.DeletePadUsingGetResponse>;
    /**
     * deletePadUsingPost - deletes a pad
    **/
    deletePadUsingPost(req: operations.DeletePadUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.DeletePadUsingPostResponse>;
    /**
     * getChatHeadUsingGet - returns the chatHead (chat-message) of the pad
    **/
    getChatHeadUsingGet(req: operations.GetChatHeadUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetChatHeadUsingGetResponse>;
    /**
     * getChatHeadUsingPost - returns the chatHead (chat-message) of the pad
    **/
    getChatHeadUsingPost(req: operations.GetChatHeadUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetChatHeadUsingPostResponse>;
    /**
     * getChatHistoryUsingGet - returns the chat history
    **/
    getChatHistoryUsingGet(req: operations.GetChatHistoryUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetChatHistoryUsingGetResponse>;
    /**
     * getChatHistoryUsingPost - returns the chat history
    **/
    getChatHistoryUsingPost(req: operations.GetChatHistoryUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetChatHistoryUsingPostResponse>;
    /**
     * getHtmlUsingGet - returns the text of a pad formatted as HTML
    **/
    getHtmlUsingGet(req: operations.GetHtmlUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetHtmlUsingGetResponse>;
    /**
     * getHtmlUsingPost - returns the text of a pad formatted as HTML
    **/
    getHtmlUsingPost(req: operations.GetHtmlUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetHtmlUsingPostResponse>;
    /**
     * getLastEditedUsingGet - returns the timestamp of the last revision of the pad
    **/
    getLastEditedUsingGet(req: operations.GetLastEditedUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetLastEditedUsingGetResponse>;
    /**
     * getLastEditedUsingPost - returns the timestamp of the last revision of the pad
    **/
    getLastEditedUsingPost(req: operations.GetLastEditedUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetLastEditedUsingPostResponse>;
    /**
     * getPublicStatusUsingGet - return true of false
    **/
    getPublicStatusUsingGet(req: operations.GetPublicStatusUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetPublicStatusUsingGetResponse>;
    /**
     * getPublicStatusUsingPost - return true of false
    **/
    getPublicStatusUsingPost(req: operations.GetPublicStatusUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetPublicStatusUsingPostResponse>;
    /**
     * getReadOnlyIdUsingGet - returns the read only link of a pad
    **/
    getReadOnlyIdUsingGet(req: operations.GetReadOnlyIdUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetReadOnlyIdUsingGetResponse>;
    /**
     * getReadOnlyIdUsingPost - returns the read only link of a pad
    **/
    getReadOnlyIdUsingPost(req: operations.GetReadOnlyIdUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetReadOnlyIdUsingPostResponse>;
    /**
     * getRevisionsCountUsingGet - returns the number of revisions of this pad
    **/
    getRevisionsCountUsingGet(req: operations.GetRevisionsCountUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetRevisionsCountUsingGetResponse>;
    /**
     * getRevisionsCountUsingPost - returns the number of revisions of this pad
    **/
    getRevisionsCountUsingPost(req: operations.GetRevisionsCountUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetRevisionsCountUsingPostResponse>;
    /**
     * getTextUsingGet - returns the text of a pad
    **/
    getTextUsingGet(req: operations.GetTextUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetTextUsingGetResponse>;
    /**
     * getTextUsingPost - returns the text of a pad
    **/
    getTextUsingPost(req: operations.GetTextUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetTextUsingPostResponse>;
    /**
     * listAllPadsUsingGet - list all the pads
    **/
    listAllPadsUsingGet(config?: AxiosRequestConfig): Promise<operations.ListAllPadsUsingGetResponse>;
    /**
     * listAllPadsUsingPost - list all the pads
    **/
    listAllPadsUsingPost(config?: AxiosRequestConfig): Promise<operations.ListAllPadsUsingPostResponse>;
    /**
     * listAuthorsOfPadUsingGet - returns an array of authors who contributed to this pad
    **/
    listAuthorsOfPadUsingGet(req: operations.ListAuthorsOfPadUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.ListAuthorsOfPadUsingGetResponse>;
    /**
     * listAuthorsOfPadUsingPost - returns an array of authors who contributed to this pad
    **/
    listAuthorsOfPadUsingPost(req: operations.ListAuthorsOfPadUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.ListAuthorsOfPadUsingPostResponse>;
    /**
     * padUsersCountUsingGet - returns the number of user that are currently editing this pad
    **/
    padUsersCountUsingGet(req: operations.PadUsersCountUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.PadUsersCountUsingGetResponse>;
    /**
     * padUsersCountUsingPost - returns the number of user that are currently editing this pad
    **/
    padUsersCountUsingPost(req: operations.PadUsersCountUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.PadUsersCountUsingPostResponse>;
    /**
     * padUsersUsingGet - returns the list of users that are currently editing this pad
    **/
    padUsersUsingGet(req: operations.PadUsersUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.PadUsersUsingGetResponse>;
    /**
     * padUsersUsingPost - returns the list of users that are currently editing this pad
    **/
    padUsersUsingPost(req: operations.PadUsersUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.PadUsersUsingPostResponse>;
    /**
     * sendClientsMessageUsingGet - sends a custom message of type msg to the pad
    **/
    sendClientsMessageUsingGet(req: operations.SendClientsMessageUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.SendClientsMessageUsingGetResponse>;
    /**
     * sendClientsMessageUsingPost - sends a custom message of type msg to the pad
    **/
    sendClientsMessageUsingPost(req: operations.SendClientsMessageUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.SendClientsMessageUsingPostResponse>;
    /**
     * setHtmlUsingGet - sets the text of a pad with HTML
    **/
    setHtmlUsingGet(req: operations.SetHtmlUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.SetHtmlUsingGetResponse>;
    /**
     * setHtmlUsingPost - sets the text of a pad with HTML
    **/
    setHtmlUsingPost(req: operations.SetHtmlUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.SetHtmlUsingPostResponse>;
    /**
     * setPublicStatusUsingGet - sets a boolean for the public status of a pad
    **/
    setPublicStatusUsingGet(req: operations.SetPublicStatusUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.SetPublicStatusUsingGetResponse>;
    /**
     * setPublicStatusUsingPost - sets a boolean for the public status of a pad
    **/
    setPublicStatusUsingPost(req: operations.SetPublicStatusUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.SetPublicStatusUsingPostResponse>;
    /**
     * setTextUsingGet - sets the text of a pad
    **/
    setTextUsingGet(req: operations.SetTextUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.SetTextUsingGetResponse>;
    /**
     * setTextUsingPost - sets the text of a pad
    **/
    setTextUsingPost(req: operations.SetTextUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.SetTextUsingPostResponse>;
}

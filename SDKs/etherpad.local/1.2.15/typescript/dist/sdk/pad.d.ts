import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Pad {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * appends a chat message
     */
    appendChatMessageUsingGET(req: operations.AppendChatMessageUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.AppendChatMessageUsingGETResponse>;
    /**
     * appends a chat message
     */
    appendChatMessageUsingPOST(req: operations.AppendChatMessageUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.AppendChatMessageUsingPOSTResponse>;
    /**
     * returns ok when the current api token is valid
     */
    checkTokenUsingGET(config?: AxiosRequestConfig): Promise<operations.CheckTokenUsingGETResponse>;
    /**
     * returns ok when the current api token is valid
     */
    checkTokenUsingPOST(config?: AxiosRequestConfig): Promise<operations.CheckTokenUsingPOSTResponse>;
    createDiffHTMLUsingGET(req: operations.CreateDiffHTMLUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.CreateDiffHTMLUsingGETResponse>;
    createDiffHTMLUsingPOST(req: operations.CreateDiffHTMLUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.CreateDiffHTMLUsingPOSTResponse>;
    /**
     * creates a new (non-group) pad. Note that if you need to create a group Pad, you should call createGroupPad
     */
    createPadUsingGET(req: operations.CreatePadUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.CreatePadUsingGETResponse>;
    /**
     * creates a new (non-group) pad. Note that if you need to create a group Pad, you should call createGroupPad
     */
    createPadUsingPOST(req: operations.CreatePadUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.CreatePadUsingPOSTResponse>;
    /**
     * deletes a pad
     */
    deletePadUsingGET(req: operations.DeletePadUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.DeletePadUsingGETResponse>;
    /**
     * deletes a pad
     */
    deletePadUsingPOST(req: operations.DeletePadUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.DeletePadUsingPOSTResponse>;
    /**
     * returns the chatHead (chat-message) of the pad
     */
    getChatHeadUsingGET(req: operations.GETChatHeadUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETChatHeadUsingGETResponse>;
    /**
     * returns the chatHead (chat-message) of the pad
     */
    getChatHeadUsingPOST(req: operations.GetChatHeadUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.GetChatHeadUsingPOSTResponse>;
    /**
     * returns the chat history
     */
    getChatHistoryUsingGET(req: operations.GETChatHistoryUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETChatHistoryUsingGETResponse>;
    /**
     * returns the chat history
     */
    getChatHistoryUsingPOST(req: operations.GetChatHistoryUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.GetChatHistoryUsingPOSTResponse>;
    /**
     * returns the text of a pad formatted as HTML
     */
    getHTMLUsingGET(req: operations.GETHTMLUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETHTMLUsingGETResponse>;
    /**
     * returns the text of a pad formatted as HTML
     */
    getHTMLUsingPOST(req: operations.GetHTMLUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.GetHTMLUsingPOSTResponse>;
    /**
     * returns the timestamp of the last revision of the pad
     */
    getLastEditedUsingGET(req: operations.GETLastEditedUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETLastEditedUsingGETResponse>;
    /**
     * returns the timestamp of the last revision of the pad
     */
    getLastEditedUsingPOST(req: operations.GetLastEditedUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.GetLastEditedUsingPOSTResponse>;
    /**
     * return true of false
     */
    getPublicStatusUsingGET(req: operations.GETPublicStatusUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETPublicStatusUsingGETResponse>;
    /**
     * return true of false
     */
    getPublicStatusUsingPOST(req: operations.GetPublicStatusUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.GetPublicStatusUsingPOSTResponse>;
    /**
     * returns the read only link of a pad
     */
    getReadOnlyIDUsingGET(req: operations.GETReadOnlyIDUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETReadOnlyIDUsingGETResponse>;
    /**
     * returns the read only link of a pad
     */
    getReadOnlyIDUsingPOST(req: operations.GetReadOnlyIDUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.GetReadOnlyIDUsingPOSTResponse>;
    /**
     * returns the number of revisions of this pad
     */
    getRevisionsCountUsingGET(req: operations.GETRevisionsCountUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETRevisionsCountUsingGETResponse>;
    /**
     * returns the number of revisions of this pad
     */
    getRevisionsCountUsingPOST(req: operations.GetRevisionsCountUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.GetRevisionsCountUsingPOSTResponse>;
    /**
     * returns the text of a pad
     */
    getTextUsingGET(req: operations.GETTextUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETTextUsingGETResponse>;
    /**
     * returns the text of a pad
     */
    getTextUsingPOST(req: operations.GetTextUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.GetTextUsingPOSTResponse>;
    /**
     * list all the pads
     */
    listAllPadsUsingGET(config?: AxiosRequestConfig): Promise<operations.ListAllPadsUsingGETResponse>;
    /**
     * list all the pads
     */
    listAllPadsUsingPOST(config?: AxiosRequestConfig): Promise<operations.ListAllPadsUsingPOSTResponse>;
    /**
     * returns an array of authors who contributed to this pad
     */
    listAuthorsOfPadUsingGET(req: operations.ListAuthorsOfPadUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.ListAuthorsOfPadUsingGETResponse>;
    /**
     * returns an array of authors who contributed to this pad
     */
    listAuthorsOfPadUsingPOST(req: operations.ListAuthorsOfPadUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.ListAuthorsOfPadUsingPOSTResponse>;
    /**
     * returns the number of user that are currently editing this pad
     */
    padUsersCountUsingGET(req: operations.PadUsersCountUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.PadUsersCountUsingGETResponse>;
    /**
     * returns the number of user that are currently editing this pad
     */
    padUsersCountUsingPOST(req: operations.PadUsersCountUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.PadUsersCountUsingPOSTResponse>;
    /**
     * returns the list of users that are currently editing this pad
     */
    padUsersUsingGET(req: operations.PadUsersUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.PadUsersUsingGETResponse>;
    /**
     * returns the list of users that are currently editing this pad
     */
    padUsersUsingPOST(req: operations.PadUsersUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.PadUsersUsingPOSTResponse>;
    /**
     * sends a custom message of type msg to the pad
     */
    sendClientsMessageUsingGET(req: operations.SendClientsMessageUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.SendClientsMessageUsingGETResponse>;
    /**
     * sends a custom message of type msg to the pad
     */
    sendClientsMessageUsingPOST(req: operations.SendClientsMessageUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.SendClientsMessageUsingPOSTResponse>;
    /**
     * sets the text of a pad with HTML
     */
    setHTMLUsingGET(req: operations.SetHTMLUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.SetHTMLUsingGETResponse>;
    /**
     * sets the text of a pad with HTML
     */
    setHTMLUsingPOST(req: operations.SetHTMLUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.SetHTMLUsingPOSTResponse>;
    /**
     * sets a boolean for the public status of a pad
     */
    setPublicStatusUsingGET(req: operations.SetPublicStatusUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.SetPublicStatusUsingGETResponse>;
    /**
     * sets a boolean for the public status of a pad
     */
    setPublicStatusUsingPOST(req: operations.SetPublicStatusUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.SetPublicStatusUsingPOSTResponse>;
    /**
     * sets the text of a pad
     */
    setTextUsingGET(req: operations.SetTextUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.SetTextUsingGETResponse>;
    /**
     * sets the text of a pad
     */
    setTextUsingPOST(req: operations.SetTextUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.SetTextUsingPOSTResponse>;
}

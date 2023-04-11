import { Author } from "./author";
import { Group } from "./group";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { Pad } from "./pad";
import { Session } from "./session";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://etherpad.local", "http://pads.mro.name/api/1.2.15"];
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
 * Etherpad is a real-time collaborative editor scalable to thousands of simultaneous real time users. It provides full data export capabilities, and runs on your server, under your control.
 */
export declare class SDK {
    author: Author;
    group: Group;
    pad: Pad;
    session: Session;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    appendTextUsingGET(req: operations.AppendTextUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.AppendTextUsingGETResponse>;
    appendTextUsingPOST(req: operations.AppendTextUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.AppendTextUsingPOSTResponse>;
    copyPadUsingGET(req: operations.CopyPadUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.CopyPadUsingGETResponse>;
    copyPadUsingPOST(req: operations.CopyPadUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.CopyPadUsingPOSTResponse>;
    copyPadWithoutHistoryUsingGET(req: operations.CopyPadWithoutHistoryUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.CopyPadWithoutHistoryUsingGETResponse>;
    copyPadWithoutHistoryUsingPOST(req: operations.CopyPadWithoutHistoryUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.CopyPadWithoutHistoryUsingPOSTResponse>;
    getAttributePoolUsingGET(req: operations.GETAttributePoolUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETAttributePoolUsingGETResponse>;
    getAttributePoolUsingPOST(req: operations.GetAttributePoolUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.GetAttributePoolUsingPOSTResponse>;
    getPadIDUsingGET(req: operations.GETPadIDUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETPadIDUsingGETResponse>;
    getPadIDUsingPOST(req: operations.GetPadIDUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.GetPadIDUsingPOSTResponse>;
    getRevisionChangesetUsingGET(req: operations.GETRevisionChangesetUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETRevisionChangesetUsingGETResponse>;
    getRevisionChangesetUsingPOST(req: operations.GetRevisionChangesetUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.GetRevisionChangesetUsingPOSTResponse>;
    getSavedRevisionsCountUsingGET(req: operations.GETSavedRevisionsCountUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETSavedRevisionsCountUsingGETResponse>;
    getSavedRevisionsCountUsingPOST(req: operations.GetSavedRevisionsCountUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.GetSavedRevisionsCountUsingPOSTResponse>;
    getStatsUsingGET(config?: AxiosRequestConfig): Promise<operations.GETStatsUsingGETResponse>;
    getStatsUsingPOST(config?: AxiosRequestConfig): Promise<operations.GetStatsUsingPOSTResponse>;
    listSavedRevisionsUsingGET(req: operations.ListSavedRevisionsUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.ListSavedRevisionsUsingGETResponse>;
    listSavedRevisionsUsingPOST(req: operations.ListSavedRevisionsUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.ListSavedRevisionsUsingPOSTResponse>;
    movePadUsingGET(req: operations.MovePadUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.MovePadUsingGETResponse>;
    movePadUsingPOST(req: operations.MovePadUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.MovePadUsingPOSTResponse>;
    restoreRevisionUsingGET(req: operations.RestoreRevisionUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.RestoreRevisionUsingGETResponse>;
    restoreRevisionUsingPOST(req: operations.RestoreRevisionUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.RestoreRevisionUsingPOSTResponse>;
    saveRevisionUsingGET(req: operations.SaveRevisionUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.SaveRevisionUsingGETResponse>;
    saveRevisionUsingPOST(req: operations.SaveRevisionUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.SaveRevisionUsingPOSTResponse>;
}

import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Events {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getV3Events - Get metadata for multiple events
     *
     * This endpoint returns the detailed event metadata for all specified events. Getty Images news, sports and entertainment photographers and
     * videographers cover editorially relevant events occurring around the world.  All images or video clips produced in association with
     * an event, are assigned the same EventID. EventIDs are part of the meta-data returned in SearchForImages Results. Only content
     * produced under a Getty Images brand name (Getty Images News, Getty Images Sports, Getty Images Entertainment, Film Magic, Wire Image)
     * will be consistently assigned an EventID. The Event framework may also be used to group similar content, such as
     * "Hats from the Royal Wedding" or "Odd-ballOffbeat images of the week".
     *
     * You'll need an API key and access token to use this resource.
     *
    **/
    getV3Events(req: operations.GetV3EventsRequest, config?: AxiosRequestConfig): Promise<operations.GetV3EventsResponse>;
    /**
     * getV3EventsId - Get metadata for a single event
     *
     * This endpoint returns the detailed event metadata for a specified event. Getty Images news, sports and entertainment
     * photographers and videographers cover editorially relevant events occurring around the world.
     * All images or video clips produced in association with an event, are assigned the same EventID.
     * EventIDs are part of the meta-data returned in SearchForImages Results. Only content produced under a Getty Images
     * brand name (Getty Images News, Getty Images Sports, Getty Images Entertainment, Film Magic, Wire Image) will be
     * consistently assigned an EventID. The Event framework may also be used to group similar content, such as
     * "Hats from the Royal Wedding" or "Odd-ballOffbeat images of the week".
     *
     * You'll need an API key and access token to use this resource.
     *
    **/
    getV3EventsId(req: operations.GetV3EventsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetV3EventsIdResponse>;
}

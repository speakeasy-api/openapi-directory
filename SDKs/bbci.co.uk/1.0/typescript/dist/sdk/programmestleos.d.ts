import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ProgrammesTLEOs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get broadcasts by channel
     *
     * @remarks
     * Get broadcasts by channel
     */
    getBroadcastsByChannel(req: operations.GetBroadcastsByChannelRequest, config?: AxiosRequestConfig): Promise<operations.GetBroadcastsByChannelResponse>;
    /**
     * List the highlights for a category.
     *
     * @remarks
     * Get the editorial highlights of a given category in TV & iPlayer.
     */
    getHighlightsByCategory(req: operations.GetHighlightsByCategoryRequest, config?: AxiosRequestConfig): Promise<operations.GetHighlightsByCategoryResponse>;
    /**
     * Get programme highlights
     *
     * @remarks
     * Get programme highlights
     */
    getProgrammeHighlights(req: operations.GetProgrammeHighlightsRequest, config?: AxiosRequestConfig): Promise<operations.GetProgrammeHighlightsResponse>;
    /**
     * List all the programmes for a category.
     *
     * @remarks
     * Get the list of all the Programmes (TLEOs) for a given category in TV & iPlayer.
     */
    getProgrammesByCategory(req: operations.GetProgrammesByCategoryRequest, config?: AxiosRequestConfig): Promise<operations.GetProgrammesByCategoryResponse>;
    /**
     * Get programmes by channel
     *
     * @remarks
     * Get programmes by channel
     */
    getProgrammesByChannel(req: operations.GetProgrammesByChannelRequest, config?: AxiosRequestConfig): Promise<operations.GetProgrammesByChannelResponse>;
    /**
     * Programme for a given pid.
     *
     * @remarks
     * Get the programme for a given programme identifier.
     */
    getProgrammesByParentPID(req: operations.GetProgrammesByParentPIDRequest, config?: AxiosRequestConfig): Promise<operations.GetProgrammesByParentPIDResponse>;
}

import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Artists {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getV3ArtistsImages - Search for images by a photographer
    **/
    getV3ArtistsImages(req: operations.GetV3ArtistsImagesRequest, config?: AxiosRequestConfig): Promise<operations.GetV3ArtistsImagesResponse>;
    /**
     * getV3ArtistsVideos - Search for videos by a photographer
    **/
    getV3ArtistsVideos(req: operations.GetV3ArtistsVideosRequest, config?: AxiosRequestConfig): Promise<operations.GetV3ArtistsVideosResponse>;
}

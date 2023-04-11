import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Media {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create media
     *
     * @remarks
     * Uploads media file to account, acceptable media formats: bmp, gif, jpg, m4a, mp3, mp4, png, wav
     */
    createMedia(req: operations.CreateMediaRequestBody, security: operations.CreateMediaSecurity, config?: AxiosRequestConfig): Promise<operations.CreateMediaResponse>;
    /**
     * Find media
     *
     * @remarks
     * Find media files created by user
     */
    findMedia(req: operations.FindMediaRequest, security: operations.FindMediaSecurity, config?: AxiosRequestConfig): Promise<operations.FindMediaResponse>;
    /**
     * Get a specific media
     *
     * @remarks
     * Get media resource by id
     */
    getMedia(req: operations.GetMediaRequest, security: operations.GetMediaSecurity, config?: AxiosRequestConfig): Promise<operations.GetMediaResponse>;
    /**
     * Download media by extension
     *
     * @remarks
     * Download a media file. Available types of files: bmp, gif, jpg, m4a, mp3, mp4, png, wav. Content type in response depends on 'extension' parameter, e.g. image/jpeg, image/png, audio/mp3, etc
     */
    getMediaData(req: operations.GetMediaDataRequest, security: operations.GetMediaDataSecurity, config?: AxiosRequestConfig): Promise<operations.GetMediaDataResponse>;
    /**
     * Download a MP3 media
     *
     * @remarks
     * Download a MP3 media, endpoint returns application/binary content-type
     */
    getMediaDataBinary(req: operations.GetMediaDataBinaryRequest, security: operations.GetMediaDataBinarySecurity, config?: AxiosRequestConfig): Promise<operations.GetMediaDataBinaryResponse>;
    /**
     * Download media by extension
     *
     * @remarks
     * Download a media file. Available types of files: bmp, gif, jpg, m4a, mp3, mp4, png, wav. Content type in response depends on 'extension' parameter, e.g. image/jpeg, image/png, audio/mp3, etc
     */
    getMediaDataByKey(req: operations.GetMediaDataByKeyRequest, security: operations.GetMediaDataByKeySecurity, config?: AxiosRequestConfig): Promise<operations.GetMediaDataByKeyResponse>;
}

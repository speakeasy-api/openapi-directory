import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Stickers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Random Sticker
     *
     * @remarks
     * Returns a random GIF, limited by tag. Excluding the tag parameter will return a random GIF from the GIPHY catalog.
     *
     */
    randomSticker(req: operations.RandomStickerRequest, config?: AxiosRequestConfig): Promise<operations.RandomStickerResponse>;
    /**
     * Search Stickers
     *
     * @remarks
     * Replicates the functionality and requirements of the classic GIPHY search, but returns animated stickers rather than GIFs.
     *
     */
    searchStickers(req: operations.SearchStickersRequest, config?: AxiosRequestConfig): Promise<operations.SearchStickersResponse>;
    /**
     * Translate phrase to Sticker
     *
     * @remarks
     * The translate API draws on search, but uses the GIPHY `special sauce` to handle translating from one vocabulary to another. In this case, words and phrases to GIFs.
     *
     */
    translateSticker(req: operations.TranslateStickerRequest, config?: AxiosRequestConfig): Promise<operations.TranslateStickerResponse>;
    /**
     * Trending Stickers
     *
     * @remarks
     * Fetch Stickers currently trending online. Hand curated by the GIPHY editorial team. Returns 25 results by default.
     *
     */
    trendingStickers(req: operations.TrendingStickersRequest, config?: AxiosRequestConfig): Promise<operations.TrendingStickersResponse>;
}

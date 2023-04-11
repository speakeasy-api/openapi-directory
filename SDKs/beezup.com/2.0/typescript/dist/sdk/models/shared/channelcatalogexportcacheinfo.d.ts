import { SpeakeasyBase } from "../../../internal/utils";
export declare class ChannelCatalogExportCacheInfo extends SpeakeasyBase {
    /**
     * The cache status
     */
    cacheStatus: string;
    /**
     * The expiration UTC date of the cache
     */
    expirationUtcDate?: Date;
    /**
     * The feed url
     */
    feedUrl?: string;
    /**
     * The last content change UTC date
     */
    lastContentChangeUtcDate?: Date;
    /**
     * The last update UTC date of the cache
     */
    lastUpdateUtcDate?: Date;
}

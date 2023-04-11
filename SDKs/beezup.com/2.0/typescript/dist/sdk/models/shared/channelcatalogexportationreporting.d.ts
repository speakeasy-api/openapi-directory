import { SpeakeasyBase } from "../../../internal/utils";
export declare class ChannelCatalogExportationReporting extends SpeakeasyBase {
    /**
     * The cache status during the exportation
     */
    cacheStatus?: string;
    /**
     * The IP address of the client who requests this exportation
     */
    clientIpAddress: string;
    /**
     * The http header User-Agent sent by the client who requests this operation
     */
    clientUserAgent: string;
    /**
     * The exportation duration. \
     *
     * @remarks
     * '00:01:00' measn 1 minute.
     *
     */
    exportationDuration?: string;
    /**
     * The exportation UTC date
     */
    exportationUtcDate: Date;
    /**
     * The exportated product count during this exportation
     */
    exportedProductCount?: number;
}

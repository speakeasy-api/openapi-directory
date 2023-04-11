import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represent a mapping between a channel column (considering channel category mapping) and a catalog column
 */
export declare class ChannelCatalogColumnMapping extends SpeakeasyBase {
    /**
     * The catalog column identifier (catalog or custom column)
     */
    catalogColumnId?: string;
    /**
     * The channel category path
     */
    channelCategoryPath?: string[];
    /**
     * The channel column identifier
     */
    channelColumnId: string;
}

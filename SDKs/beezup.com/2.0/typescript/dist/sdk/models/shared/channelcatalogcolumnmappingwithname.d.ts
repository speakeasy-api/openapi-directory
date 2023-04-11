import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represent a mapping between a channel column (considering channel category mapping) and a catalog column
 */
export declare class ChannelCatalogColumnMappingWithName extends SpeakeasyBase {
    /**
     * The BeezUP column name
     */
    catalogBeezUPColumnName?: string;
    /**
     * The catalog column identifier (catalog or custom column)
     */
    catalogColumnId?: string;
    /**
     * The catalog column named by the user (catalog or custom column)
     */
    catalogColumnName?: string;
    /**
     * The BeezUP column name
     */
    channelBeezUPColumnName?: string;
    /**
     * The channel category path
     */
    channelCategoryPath?: string[];
    /**
     * The channel column identifier
     */
    channelColumnId: string;
    /**
     * The channel column name
     */
    channelColumnName: string;
}

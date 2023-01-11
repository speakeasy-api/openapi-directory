import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represent a mapping between a channel column (considering channel category mapping) and a catalog column
**/
export declare class ChannelCatalogColumnMappingWithName extends SpeakeasyBase {
    catalogBeezUPColumnName?: string;
    catalogColumnId?: string;
    catalogColumnName?: string;
    channelBeezUPColumnName?: string;
    channelCategoryPath?: string[];
    channelColumnId: string;
    channelColumnName: string;
}

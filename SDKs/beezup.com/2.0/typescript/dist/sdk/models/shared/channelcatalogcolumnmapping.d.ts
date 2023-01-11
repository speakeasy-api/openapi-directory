import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represent a mapping between a channel column (considering channel category mapping) and a catalog column
**/
export declare class ChannelCatalogColumnMapping extends SpeakeasyBase {
    catalogColumnId?: string;
    channelCategoryPath?: string[];
    channelColumnId: string;
}

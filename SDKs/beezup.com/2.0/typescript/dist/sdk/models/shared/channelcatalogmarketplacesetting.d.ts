import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelCatalogMarketplaceSettingDiscriminatorTypeEnum } from "./channelcatalogmarketplacesettingdiscriminatortypeenum";
/**
 * Model for fetching a channel catalog marketplace setting
 */
export declare class ChannelCatalogMarketplaceSetting extends SpeakeasyBase {
    discriminatorType: ChannelCatalogMarketplaceSettingDiscriminatorTypeEnum;
    /**
     * Channel catalog marketplace property name
     */
    name: string;
}

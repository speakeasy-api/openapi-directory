import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUPCommonInfoSummaries } from "./beezupcommoninfosummaries";
import { BeezUPCommonLOVLink3 } from "./beezupcommonlovlink3";
import { ChannelCatalogMarketplacePropertyDiscriminatorTypeEnum } from "./channelcatalogmarketplacepropertydiscriminatortypeenum";
import { TypeEnum } from "./typeenum";
/**
 * Model for fetching a channel catalog marketplace property
 */
export declare class ChannelCatalogMarketplaceProperty extends SpeakeasyBase {
    /**
     * Indicate the description of the property
     */
    description?: string;
    discriminatorType: ChannelCatalogMarketplacePropertyDiscriminatorTypeEnum;
    info?: BeezUPCommonInfoSummaries;
    /**
     * Describe the way you have to follow to get access to the LOV
     */
    lovLink?: BeezUPCommonLOVLink3;
    /**
     * Indicates if the property value must be in the list of value.
     */
    lovRequired?: boolean;
    /**
     * Indicates the maximum item count of the property value
     */
    maxItems?: number;
    /**
     * Indicates the maximum size of the property value
     */
    maxLength?: number;
    /**
     * Indicates the minimum item count of the property value.
     */
    minItems?: number;
    /**
     * Indicates the minimum size of the property value
     */
    minLength?: number;
    /**
     * Channel catalog marketplace property name
     */
    name: string;
    /**
     * Indicates the offer identifier required to configure this property.
     */
    offerIdRequired?: number;
    /**
     * Channel catalog marketplace setting value format validation regular expression
     */
    pattern?: string;
    /**
     * Indicate the position of the property in the display group
     */
    position: number;
    /**
     * Indicate if the value cannot be changed. This is used for example for ebay token that should not be changed.
     */
    readOnly: boolean;
    /**
     * Indicate if the property is required or not
     */
    required: boolean;
    /**
     * The Data Type
     */
    type: TypeEnum;
    /**
     * Indicates if this property should be displayed in the configuration page.
     */
    visible: boolean;
}

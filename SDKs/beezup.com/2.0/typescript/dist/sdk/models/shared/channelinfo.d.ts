import { SpeakeasyBase } from "../../../internal/utils";
export declare class ChannelInfoDetails extends SpeakeasyBase {
    /**
     * The business model of the channel
     */
    businessModel?: string;
    /**
     * The channel category
     */
    category?: string;
    /**
     * The channel type
     */
    channelType?: string;
    /**
     * The cost's description of the channel
     */
    costs?: string;
    /**
     * The home url of the channel
     */
    homeUrl?: string;
    /**
     * The subscription link to the channel
     */
    subscriptionLink?: string;
    /**
     * The tracking type
     */
    trackingType?: string;
}
export declare class ChannelInfoKeyNumbers extends SpeakeasyBase {
    /**
     * The estimated category count of the channel
     */
    categories?: string;
    /**
     * The estimated product count of the channel
     */
    products?: string;
    /**
     * The estimated store count of the channel
     */
    stores?: string;
    /**
     * The estimated view count per month of the channel
     */
    viewsPerMonth?: string;
}
export declare class ChannelInfoSalesContact extends SpeakeasyBase {
    /**
     * Indicate the sales contact email
     */
    email?: string;
    /**
     * Indicate the BeezUP offer
     */
    name?: string;
    /**
     * The sales contact phone number
     */
    phoneNumber?: string;
}
export declare class ChannelInfoTechnicalContact extends SpeakeasyBase {
    /**
     * The technical contact email
     */
    email?: string;
    /**
     * The technical contact name
     */
    name?: string;
    /**
     * The technical contact phone number
     */
    phoneNumber?: string;
}
/**
 * Channel information
 */
export declare class ChannelInfo extends SpeakeasyBase {
    /**
     * Indicate the BeezUP offer
     */
    beezUPOffer?: string;
    /**
     * Indicae a description to the channel
     */
    channelDescription?: string;
    /**
     * The channel identifier
     */
    channelId: string;
    /**
     * The URL <a href="https://en.wikipedia.org/wiki/URL">https://en.wikipedia.org/wiki/URL</a>
     */
    channelLogoUrl?: string;
    /**
     * The channel name
     */
    channelName: string;
    details?: ChannelInfoDetails;
    keyNumbers?: ChannelInfoKeyNumbers;
    salesContact?: ChannelInfoSalesContact;
    technicalContact?: ChannelInfoTechnicalContact;
}

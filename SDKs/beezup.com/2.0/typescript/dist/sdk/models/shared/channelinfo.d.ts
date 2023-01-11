import { SpeakeasyBase } from "../../../internal/utils";
export declare class ChannelInfoDetails extends SpeakeasyBase {
    businessModel?: string;
    category?: string;
    channelType?: string;
    costs?: string;
    homeUrl?: string;
    subscriptionLink?: string;
    trackingType?: string;
}
export declare class ChannelInfoKeyNumbers extends SpeakeasyBase {
    categories?: string;
    products?: string;
    stores?: string;
    viewsPerMonth?: string;
}
export declare class ChannelInfoSalesContact extends SpeakeasyBase {
    email?: string;
    name?: string;
    phoneNumber?: string;
}
export declare class ChannelInfoTechnicalContact extends SpeakeasyBase {
    email?: string;
    name?: string;
    phoneNumber?: string;
}
export declare class ChannelInfo extends SpeakeasyBase {
    beezUPOffer?: string;
    channelDescription?: string;
    channelId: string;
    channelLogoUrl?: string;
    channelName: string;
    details?: ChannelInfoDetails;
    keyNumbers?: ChannelInfoKeyNumbers;
    salesContact?: ChannelInfoSalesContact;
    technicalContact?: ChannelInfoTechnicalContact;
}

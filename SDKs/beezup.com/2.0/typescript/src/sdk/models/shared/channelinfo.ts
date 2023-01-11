import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ChannelInfoDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=businessModel" })
  businessModel?: string;

  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=channelType" })
  channelType?: string;

  @SpeakeasyMetadata({ data: "json, name=costs" })
  costs?: string;

  @SpeakeasyMetadata({ data: "json, name=homeUrl" })
  homeUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptionLink" })
  subscriptionLink?: string;

  @SpeakeasyMetadata({ data: "json, name=trackingType" })
  trackingType?: string;
}


export class ChannelInfoKeyNumbers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categories" })
  categories?: string;

  @SpeakeasyMetadata({ data: "json, name=products" })
  products?: string;

  @SpeakeasyMetadata({ data: "json, name=stores" })
  stores?: string;

  @SpeakeasyMetadata({ data: "json, name=viewsPerMonth" })
  viewsPerMonth?: string;
}


export class ChannelInfoSalesContact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;
}


export class ChannelInfoTechnicalContact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;
}


export class ChannelInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=beezUPOffer" })
  beezUPOffer?: string;

  @SpeakeasyMetadata({ data: "json, name=channelDescription" })
  channelDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=channelId" })
  channelId: string;

  @SpeakeasyMetadata({ data: "json, name=channelLogoUrl" })
  channelLogoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=channelName" })
  channelName: string;

  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: ChannelInfoDetails;

  @SpeakeasyMetadata({ data: "json, name=keyNumbers" })
  keyNumbers?: ChannelInfoKeyNumbers;

  @SpeakeasyMetadata({ data: "json, name=salesContact" })
  salesContact?: ChannelInfoSalesContact;

  @SpeakeasyMetadata({ data: "json, name=technicalContact" })
  technicalContact?: ChannelInfoTechnicalContact;
}

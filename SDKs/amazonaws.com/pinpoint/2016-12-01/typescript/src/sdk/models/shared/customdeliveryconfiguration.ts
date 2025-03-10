/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { EndpointTypesElementEnum } from "./endpointtypeselementenum";
import { Expose } from "class-transformer";

/**
 * Specifies the delivery configuration settings for sending a campaign or campaign treatment through a custom channel. This object is required if you use the CampaignCustomMessage object to define the message to send for the campaign or campaign treatment.
 */
export class CustomDeliveryConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "DeliveryUri" })
  deliveryUri: string;

  @SpeakeasyMetadata()
  @Expose({ name: "EndpointTypes" })
  endpointTypes?: EndpointTypesElementEnum[];
}

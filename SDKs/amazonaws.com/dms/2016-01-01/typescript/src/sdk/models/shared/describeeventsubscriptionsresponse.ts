/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { EventSubscription } from "./eventsubscription";
import { Expose, Type } from "class-transformer";

/**
 * <p/>
 */
export class DescribeEventSubscriptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: EventSubscription })
  @Expose({ name: "EventSubscriptionsList" })
  @Type(() => EventSubscription)
  eventSubscriptionsList?: EventSubscription[];

  @SpeakeasyMetadata()
  @Expose({ name: "Marker" })
  marker?: string;
}

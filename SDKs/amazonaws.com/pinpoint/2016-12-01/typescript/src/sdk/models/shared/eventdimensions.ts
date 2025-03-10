/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
  objectToClass,
  SpeakeasyBase,
  SpeakeasyMetadata,
} from "../../../internal/utils";
import { AttributeDimension } from "./attributedimension";
import { MetricDimension } from "./metricdimension";
import { SetDimension } from "./setdimension";
import { Expose, Transform, Type } from "class-transformer";

/**
 * Specifies the dimensions for an event filter that determines when a campaign is sent or a journey activity is performed.
 */
export class EventDimensions extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AttributeDimension })
  @Expose({ name: "Attributes" })
  @Transform(
    ({ value }) => {
      const obj: Record<string, AttributeDimension> = {};
      for (const key in value) {
        obj[key] = objectToClass(value[key], AttributeDimension);
      }
      return obj;
    },
    { toClassOnly: true }
  )
  attributes?: Record<string, AttributeDimension>;

  @SpeakeasyMetadata()
  @Expose({ name: "EventType" })
  @Type(() => SetDimension)
  eventType?: SetDimension;

  @SpeakeasyMetadata({ elemType: MetricDimension })
  @Expose({ name: "Metrics" })
  @Transform(
    ({ value }) => {
      const obj: Record<string, MetricDimension> = {};
      for (const key in value) {
        obj[key] = objectToClass(value[key], MetricDimension);
      }
      return obj;
    },
    { toClassOnly: true }
  )
  metrics?: Record<string, MetricDimension>;
}

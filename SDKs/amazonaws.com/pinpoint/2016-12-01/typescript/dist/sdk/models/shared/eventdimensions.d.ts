import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeDimension } from "./attributedimension";
import { MetricDimension } from "./metricdimension";
import { SetDimension } from "./setdimension";
/**
 * Specifies the dimensions for an event filter that determines when a campaign is sent or a journey activity is performed.
 */
export declare class EventDimensions extends SpeakeasyBase {
    attributes?: Record<string, AttributeDimension>;
    eventType?: SetDimension;
    metrics?: Record<string, MetricDimension>;
}

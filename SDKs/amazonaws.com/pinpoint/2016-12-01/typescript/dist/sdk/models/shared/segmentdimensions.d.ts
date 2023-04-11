import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeDimension } from "./attributedimension";
import { MetricDimension } from "./metricdimension";
import { SegmentBehaviors } from "./segmentbehaviors";
import { SegmentDemographics } from "./segmentdemographics";
import { SegmentLocation } from "./segmentlocation";
/**
 * Specifies the dimension settings for a segment.
 */
export declare class SegmentDimensions extends SpeakeasyBase {
    attributes?: Record<string, AttributeDimension>;
    behavior?: SegmentBehaviors;
    demographic?: SegmentDemographics;
    location?: SegmentLocation;
    metrics?: Record<string, MetricDimension>;
    userAttributes?: Record<string, AttributeDimension>;
}

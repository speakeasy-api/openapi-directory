import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeDimension } from "./attributedimension";
import { SegmentBehaviors } from "./segmentbehaviors";
import { SegmentDemographics } from "./segmentdemographics";
import { SegmentLocation } from "./segmentlocation";
import { MetricDimension } from "./metricdimension";
import { EventCondition } from "./eventcondition";
import { SegmentCondition } from "./segmentcondition";
/**
 * The dimension settings for the segment that's associated with the activity.
**/
export declare class SimpleConditionSegmentDimensions extends SpeakeasyBase {
    attributes?: Record<string, AttributeDimension>;
    behavior?: SegmentBehaviors;
    demographic?: SegmentDemographics;
    location?: SegmentLocation;
    metrics?: Record<string, MetricDimension>;
    userAttributes?: Record<string, AttributeDimension>;
}
/**
 * Specifies a condition to evaluate for an activity in a journey.
**/
export declare class SimpleCondition extends SpeakeasyBase {
    eventCondition?: EventCondition;
    segmentCondition?: SegmentCondition;
    segmentDimensions?: SimpleConditionSegmentDimensions;
}

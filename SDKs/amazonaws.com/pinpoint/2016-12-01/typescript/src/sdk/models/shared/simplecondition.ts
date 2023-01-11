import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeDimension } from "./attributedimension";
import { SegmentBehaviors } from "./segmentbehaviors";
import { SegmentDemographics } from "./segmentdemographics";
import { SegmentLocation } from "./segmentlocation";
import { MetricDimension } from "./metricdimension";
import { EventCondition } from "./eventcondition";
import { SegmentCondition } from "./segmentcondition";



// SimpleConditionSegmentDimensions
/** 
 * The dimension settings for the segment that's associated with the activity.
**/
export class SimpleConditionSegmentDimensions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attributes", elemType: AttributeDimension })
  attributes?: Record<string, AttributeDimension>;

  @SpeakeasyMetadata({ data: "json, name=Behavior" })
  behavior?: SegmentBehaviors;

  @SpeakeasyMetadata({ data: "json, name=Demographic" })
  demographic?: SegmentDemographics;

  @SpeakeasyMetadata({ data: "json, name=Location" })
  location?: SegmentLocation;

  @SpeakeasyMetadata({ data: "json, name=Metrics", elemType: MetricDimension })
  metrics?: Record<string, MetricDimension>;

  @SpeakeasyMetadata({ data: "json, name=UserAttributes", elemType: AttributeDimension })
  userAttributes?: Record<string, AttributeDimension>;
}


// SimpleCondition
/** 
 * Specifies a condition to evaluate for an activity in a journey.
**/
export class SimpleCondition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EventCondition" })
  eventCondition?: EventCondition;

  @SpeakeasyMetadata({ data: "json, name=SegmentCondition" })
  segmentCondition?: SegmentCondition;

  @SpeakeasyMetadata({ data: "json, name=SegmentDimensions" })
  segmentDimensions?: SimpleConditionSegmentDimensions;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange
/** 
 * The destination port range assigned to the Traffic Mirror rule.
**/
export class CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fromPort?: Record<string, any>;

  @SpeakeasyMetadata()
  toPort?: Record<string, any>;
}


// CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange
/** 
 * The source port range assigned to the Traffic Mirror rule.
**/
export class CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fromPort?: Record<string, any>;

  @SpeakeasyMetadata()
  toPort?: Record<string, any>;
}


// CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRule
/** 
 * The Traffic Mirror rule.
**/
export class CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRule extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: Record<string, any>;

  @SpeakeasyMetadata()
  destinationCidrBlock?: Record<string, any>;

  @SpeakeasyMetadata()
  destinationPortRange?: CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange;

  @SpeakeasyMetadata()
  protocol?: Record<string, any>;

  @SpeakeasyMetadata()
  ruleAction?: Record<string, any>;

  @SpeakeasyMetadata()
  ruleNumber?: Record<string, any>;

  @SpeakeasyMetadata()
  sourceCidrBlock?: Record<string, any>;

  @SpeakeasyMetadata()
  sourcePortRange?: CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange;

  @SpeakeasyMetadata()
  trafficDirection?: Record<string, any>;

  @SpeakeasyMetadata()
  trafficMirrorFilterId?: Record<string, any>;

  @SpeakeasyMetadata()
  trafficMirrorFilterRuleId?: Record<string, any>;
}


export class CreateTrafficMirrorFilterRuleResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientToken?: Record<string, any>;

  @SpeakeasyMetadata()
  trafficMirrorFilterRule?: CreateTrafficMirrorFilterRuleResultTrafficMirrorFilterRule;
}

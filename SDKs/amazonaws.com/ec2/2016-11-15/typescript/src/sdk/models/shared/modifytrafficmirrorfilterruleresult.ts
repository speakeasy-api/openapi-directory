import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange
/** 
 * The destination port range assigned to the Traffic Mirror rule.
**/
export class ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fromPort?: Record<string, any>;

  @SpeakeasyMetadata()
  toPort?: Record<string, any>;
}


// ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange
/** 
 * The source port range assigned to the Traffic Mirror rule.
**/
export class ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fromPort?: Record<string, any>;

  @SpeakeasyMetadata()
  toPort?: Record<string, any>;
}


// ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRule
/** 
 * Modifies a Traffic Mirror rule.
**/
export class ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRule extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: Record<string, any>;

  @SpeakeasyMetadata()
  destinationCidrBlock?: Record<string, any>;

  @SpeakeasyMetadata()
  destinationPortRange?: ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleDestinationPortRange;

  @SpeakeasyMetadata()
  protocol?: Record<string, any>;

  @SpeakeasyMetadata()
  ruleAction?: Record<string, any>;

  @SpeakeasyMetadata()
  ruleNumber?: Record<string, any>;

  @SpeakeasyMetadata()
  sourceCidrBlock?: Record<string, any>;

  @SpeakeasyMetadata()
  sourcePortRange?: ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRuleSourcePortRange;

  @SpeakeasyMetadata()
  trafficDirection?: Record<string, any>;

  @SpeakeasyMetadata()
  trafficMirrorFilterId?: Record<string, any>;

  @SpeakeasyMetadata()
  trafficMirrorFilterRuleId?: Record<string, any>;
}


export class ModifyTrafficMirrorFilterRuleResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  trafficMirrorFilterRule?: ModifyTrafficMirrorFilterRuleResultTrafficMirrorFilterRule;
}

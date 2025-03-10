/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CachePolicySummaryList } from "./cachepolicysummarylist";

/**
 * A list of cache policies.
 */
export class CachePolicyList extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CachePolicySummaryList })
  items?: CachePolicySummaryList[];

  @SpeakeasyMetadata()
  maxItems: number;

  @SpeakeasyMetadata()
  nextMarker?: string;

  @SpeakeasyMetadata()
  quantity: number;
}

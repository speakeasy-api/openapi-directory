/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { QueryArgProfileList } from "./queryargprofilelist";

/**
 * Query argument-profile mapping for field-level encryption.
 */
export class QueryArgProfiles extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: QueryArgProfileList })
  items?: QueryArgProfileList[];

  @SpeakeasyMetadata()
  quantity: number;
}

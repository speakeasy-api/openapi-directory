/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TagList } from "./taglist";

export class CreateOptionGroupMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  engineName: string;

  @SpeakeasyMetadata()
  majorEngineVersion: string;

  @SpeakeasyMetadata()
  optionGroupDescription: string;

  @SpeakeasyMetadata()
  optionGroupName: string;

  @SpeakeasyMetadata({ elemType: TagList })
  tags?: TagList[];
}

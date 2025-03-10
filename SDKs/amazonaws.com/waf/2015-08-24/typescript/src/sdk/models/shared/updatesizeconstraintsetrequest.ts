/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { SizeConstraintSetUpdate } from "./sizeconstraintsetupdate";
import { Expose, Type } from "class-transformer";

export class UpdateSizeConstraintSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "ChangeToken" })
  changeToken: string;

  @SpeakeasyMetadata()
  @Expose({ name: "SizeConstraintSetId" })
  sizeConstraintSetId: string;

  @SpeakeasyMetadata({ elemType: SizeConstraintSetUpdate })
  @Expose({ name: "Updates" })
  @Type(() => SizeConstraintSetUpdate)
  updates: SizeConstraintSetUpdate[];
}

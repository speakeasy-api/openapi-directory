/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * OK
 */
export class CareTeamMember extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "appointment" })
  appointment?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  createdAt?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "patient" })
  patient?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "user" })
  user?: string;
}

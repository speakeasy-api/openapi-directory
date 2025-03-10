/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

export class PublicKeyFull extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: number;

  @SpeakeasyMetadata()
  @Expose({ name: "key" })
  key: string;

  @SpeakeasyMetadata()
  @Expose({ name: "last_used" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  lastUsed: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "read_only" })
  readOnly: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "repository_id" })
  repositoryId: number;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;

  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url: string;

  @SpeakeasyMetadata()
  @Expose({ name: "user_id" })
  userId: number;

  @SpeakeasyMetadata()
  @Expose({ name: "verified" })
  verified: boolean;
}

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

/**
 * Successful GET on Certificate resource
 */
export class Certificate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "created" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  created: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: number;

  @SpeakeasyMetadata()
  @Expose({ name: "id_private_key_file" })
  idPrivateKeyFile: number;

  @SpeakeasyMetadata()
  @Expose({ name: "id_public_key_file" })
  idPublicKeyFile: number;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: string;
}

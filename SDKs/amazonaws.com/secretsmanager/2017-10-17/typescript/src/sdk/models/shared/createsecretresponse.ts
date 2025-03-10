/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ReplicationStatusType } from "./replicationstatustype";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class CreateSecretResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "ARN" })
  arn?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "Name" })
  name?: string;

  @SpeakeasyMetadata({ elemType: ReplicationStatusType })
  @Expose({ name: "ReplicationStatus" })
  @Type(() => ReplicationStatusType)
  replicationStatus?: ReplicationStatusType[];

  @SpeakeasyMetadata()
  @Expose({ name: "VersionId" })
  versionId?: string;
}

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ReplicationConfiguration } from "./replicationconfiguration";
import { Expose, Type } from "class-transformer";

export class PutReplicationConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "replicationConfiguration" })
  @Type(() => ReplicationConfiguration)
  replicationConfiguration: ReplicationConfiguration;
}

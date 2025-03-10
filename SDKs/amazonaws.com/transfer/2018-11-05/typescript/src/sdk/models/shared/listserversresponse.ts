/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ListedServer } from "./listedserver";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class ListServersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: ListedServer })
  @Expose({ name: "Servers" })
  @Type(() => ListedServer)
  servers: ListedServer[];
}

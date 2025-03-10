/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Command } from "./command";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class ListCommandsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Command })
  @Expose({ name: "Commands" })
  @Type(() => Command)
  commands?: Command[];

  @SpeakeasyMetadata()
  @Expose({ name: "NextToken" })
  nextToken?: string;
}

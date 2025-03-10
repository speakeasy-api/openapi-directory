/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { FilterRule } from "./filterrule";
import { Options } from "./options";
import { TagListEntry } from "./taglistentry";
import { TaskSchedule } from "./taskschedule";
import { Expose, Type } from "class-transformer";

/**
 * CreateTaskRequest
 */
export class CreateTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "CloudWatchLogGroupArn" })
  cloudWatchLogGroupArn?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "DestinationLocationArn" })
  destinationLocationArn: string;

  @SpeakeasyMetadata({ elemType: FilterRule })
  @Expose({ name: "Excludes" })
  @Type(() => FilterRule)
  excludes?: FilterRule[];

  @SpeakeasyMetadata({ elemType: FilterRule })
  @Expose({ name: "Includes" })
  @Type(() => FilterRule)
  includes?: FilterRule[];

  @SpeakeasyMetadata()
  @Expose({ name: "Name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "Options" })
  @Type(() => Options)
  options?: Options;

  @SpeakeasyMetadata()
  @Expose({ name: "Schedule" })
  @Type(() => TaskSchedule)
  schedule?: TaskSchedule;

  @SpeakeasyMetadata()
  @Expose({ name: "SourceLocationArn" })
  sourceLocationArn: string;

  @SpeakeasyMetadata({ elemType: TagListEntry })
  @Expose({ name: "Tags" })
  @Type(() => TagListEntry)
  tags?: TagListEntry[];
}

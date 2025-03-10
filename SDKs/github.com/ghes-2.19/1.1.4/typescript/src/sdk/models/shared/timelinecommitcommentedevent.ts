/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CommitComment } from "./commitcomment";
import { Expose, Type } from "class-transformer";

/**
 * Timeline Commit Commented Event
 */
export class TimelineCommitCommentedEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CommitComment })
  @Expose({ name: "comments" })
  @Type(() => CommitComment)
  comments?: CommitComment[];

  @SpeakeasyMetadata()
  @Expose({ name: "commit_id" })
  commitId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "event" })
  event?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "node_id" })
  nodeId?: string;
}

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Verification } from "./verification";
import { Expose, Type } from "class-transformer";

export class GitTagObject extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "sha" })
  sha: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: string;

  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url: string;
}

export class GitTagTagger extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "date" })
  date: string;

  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
}

/**
 * Metadata for a Git tag
 */
export class GitTag extends SpeakeasyBase {
  /**
   * Message describing the purpose of the tag
   */
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "node_id" })
  nodeId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "object" })
  @Type(() => GitTagObject)
  object: GitTagObject;

  @SpeakeasyMetadata()
  @Expose({ name: "sha" })
  sha: string;

  /**
   * Name of the tag
   */
  @SpeakeasyMetadata()
  @Expose({ name: "tag" })
  tag: string;

  @SpeakeasyMetadata()
  @Expose({ name: "tagger" })
  @Type(() => GitTagTagger)
  tagger: GitTagTagger;

  /**
   * URL for the tag
   */
  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url: string;

  @SpeakeasyMetadata()
  @Expose({ name: "verification" })
  @Type(() => Verification)
  verification?: Verification;
}

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class FileCommitCommitAuthor extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "date" })
  date?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class FileCommitCommitCommitter extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "date" })
  date?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class FileCommitCommitParents extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "html_url" })
  htmlUrl?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sha" })
  sha?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url?: string;
}

export class FileCommitCommitTree extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "sha" })
  sha?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url?: string;
}

export class FileCommitCommitVerification extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "payload" })
  payload?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "reason" })
  reason?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "signature" })
  signature?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "verified" })
  verified?: boolean;
}

export class FileCommitCommit extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "author" })
  @Type(() => FileCommitCommitAuthor)
  author?: FileCommitCommitAuthor;

  @SpeakeasyMetadata()
  @Expose({ name: "committer" })
  @Type(() => FileCommitCommitCommitter)
  committer?: FileCommitCommitCommitter;

  @SpeakeasyMetadata()
  @Expose({ name: "html_url" })
  htmlUrl?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "node_id" })
  nodeId?: string;

  @SpeakeasyMetadata({ elemType: FileCommitCommitParents })
  @Expose({ name: "parents" })
  @Type(() => FileCommitCommitParents)
  parents?: FileCommitCommitParents[];

  @SpeakeasyMetadata()
  @Expose({ name: "sha" })
  sha?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "tree" })
  @Type(() => FileCommitCommitTree)
  tree?: FileCommitCommitTree;

  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "verification" })
  @Type(() => FileCommitCommitVerification)
  verification?: FileCommitCommitVerification;
}

export class FileCommitContentLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "git" })
  git?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "html" })
  html?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  self?: string;
}

export class FileCommitContent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => FileCommitContentLinks)
  links?: FileCommitContentLinks;

  @SpeakeasyMetadata()
  @Expose({ name: "download_url" })
  downloadUrl?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "git_url" })
  gitUrl?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "html_url" })
  htmlUrl?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "path" })
  path?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sha" })
  sha?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "size" })
  size?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url?: string;
}

/**
 * File Commit
 */
export class FileCommit extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "commit" })
  @Type(() => FileCommitCommit)
  commit: FileCommitCommit;

  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  @Type(() => FileCommitContent)
  content: FileCommitContent;
}

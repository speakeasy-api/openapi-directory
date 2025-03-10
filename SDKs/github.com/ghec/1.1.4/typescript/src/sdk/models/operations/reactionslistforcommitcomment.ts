/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

/**
 * Returns a single [reaction type](https://docs.github.com/enterprise-cloud@latest//rest/reference/reactions#reaction-types). Omit this parameter to list all reactions to a commit comment.
 */
export enum ReactionsListForCommitCommentContentEnum {
  Plus1 = "+1",
  Minus1 = "-1",
  Laugh = "laugh",
  Confused = "confused",
  Heart = "heart",
  Hooray = "hooray",
  Rocket = "rocket",
  Eyes = "eyes",
}

export class ReactionsListForCommitCommentRequest extends SpeakeasyBase {
  /**
   * The unique identifier of the comment.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=comment_id",
  })
  commentId: number;

  /**
   * Returns a single [reaction type](https://docs.github.com/enterprise-cloud@latest//rest/reference/reactions#reaction-types). Omit this parameter to list all reactions to a commit comment.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=content",
  })
  content?: ReactionsListForCommitCommentContentEnum;

  /**
   * The account owner of the repository. The name is not case sensitive.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=owner",
  })
  owner: string;

  /**
   * Page number of the results to fetch.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  /**
   * The number of results per page (max 100).
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=per_page",
  })
  perPage?: number;

  /**
   * The name of the repository. The name is not case sensitive.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=repo",
  })
  repo: string;
}

export class ReactionsListForCommitCommentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers?: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Resource not found
   */
  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  /**
   * Response
   */
  @SpeakeasyMetadata({ elemType: shared.Reaction })
  reactions?: shared.Reaction[];
}

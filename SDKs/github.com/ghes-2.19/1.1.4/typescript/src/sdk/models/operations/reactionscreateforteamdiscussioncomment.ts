/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

/**
 * The [reaction type](https://docs.github.com/enterprise-server@2.19/rest/reference/reactions#reaction-types) to add to the team discussion comment.
 */
export enum ReactionsCreateForTeamDiscussionCommentRequestBodyContentEnum {
  Plus1 = "+1",
  Minus1 = "-1",
  Laugh = "laugh",
  Confused = "confused",
  Heart = "heart",
  Hooray = "hooray",
  Rocket = "rocket",
  Eyes = "eyes",
}

export class ReactionsCreateForTeamDiscussionCommentRequestBody extends SpeakeasyBase {
  /**
   * The [reaction type](https://docs.github.com/enterprise-server@2.19/rest/reference/reactions#reaction-types) to add to the team discussion comment.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content: ReactionsCreateForTeamDiscussionCommentRequestBodyContentEnum;
}

export class ReactionsCreateForTeamDiscussionCommentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody: ReactionsCreateForTeamDiscussionCommentRequestBody;

  /**
   * This API is under preview and subject to change.
   */
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=accept" })
  accept: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=comment_number",
  })
  commentNumber: number;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=discussion_number",
  })
  discussionNumber: number;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=team_id",
  })
  teamId: number;
}

export class ReactionsCreateForTeamDiscussionCommentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Response
   */
  @SpeakeasyMetadata()
  reaction?: shared.Reaction;
}

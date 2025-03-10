/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

/**
 * Returns a single [reaction type](https://docs.github.com/enterprise-server@2.20/rest/reference/reactions#reaction-types). Omit this parameter to list all reactions to an issue comment.
 */
export enum ReactionsListForIssueCommentContentEnum {
  Plus1 = "+1",
  Minus1 = "-1",
  Laugh = "laugh",
  Confused = "confused",
  Heart = "heart",
  Hooray = "hooray",
  Rocket = "rocket",
  Eyes = "eyes",
}

export class ReactionsListForIssueCommentRequest extends SpeakeasyBase {
  /**
   * comment_id parameter
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=comment_id",
  })
  commentId: number;

  /**
   * Returns a single [reaction type](https://docs.github.com/enterprise-server@2.20/rest/reference/reactions#reaction-types). Omit this parameter to list all reactions to an issue comment.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=content",
  })
  content?: ReactionsListForIssueCommentContentEnum;

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
   * Results per page (max 100)
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=per_page",
  })
  perPage?: number;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=repo",
  })
  repo: string;
}

/**
 * Preview header missing
 */
export class ReactionsListForIssueComment415ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "documentation_url" })
  documentationUrl: string;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;
}

export class ReactionsListForIssueCommentResponse extends SpeakeasyBase {
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

  /**
   * Preview header missing
   */
  @SpeakeasyMetadata()
  reactionsListForIssueComment415ApplicationJSONObject?: ReactionsListForIssueComment415ApplicationJSON;
}

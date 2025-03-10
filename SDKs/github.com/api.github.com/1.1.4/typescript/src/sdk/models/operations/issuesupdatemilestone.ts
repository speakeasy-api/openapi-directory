/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Transform } from "class-transformer";

/**
 * The state of the milestone. Either `open` or `closed`.
 */
export enum IssuesUpdateMilestoneRequestBodyStateEnum {
  Open = "open",
  Closed = "closed",
}

export class IssuesUpdateMilestoneRequestBody extends SpeakeasyBase {
  /**
   * A description of the milestone.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  /**
   * The milestone due date. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "due_on" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  dueOn?: Date;

  /**
   * The state of the milestone. Either `open` or `closed`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "state" })
  state?: IssuesUpdateMilestoneRequestBodyStateEnum;

  /**
   * The title of the milestone.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: string;
}

export class IssuesUpdateMilestoneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: IssuesUpdateMilestoneRequestBody;

  /**
   * The number that identifies the milestone.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=milestone_number",
  })
  milestoneNumber: number;

  /**
   * The account owner of the repository. The name is not case sensitive.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=owner",
  })
  owner: string;

  /**
   * The name of the repository. The name is not case sensitive.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=repo",
  })
  repo: string;
}

export class IssuesUpdateMilestoneResponse extends SpeakeasyBase {
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
  milestone?: shared.Milestone;
}

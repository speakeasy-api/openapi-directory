/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

/**
 * The order to sort by. Default: `asc` when using `full_name`, otherwise `desc`.
 */
export enum ReposListForAuthenticatedUserDirectionEnum {
  Asc = "asc",
  Desc = "desc",
}

/**
 * The property to sort the results by.
 */
export enum ReposListForAuthenticatedUserSortEnum {
  Created = "created",
  Updated = "updated",
  Pushed = "pushed",
  FullName = "full_name",
}

/**
 * Limit results to repositories of the specified type. Will cause a `422` error if used in the same request as **visibility** or **affiliation**.
 */
export enum ReposListForAuthenticatedUserTypeEnum {
  All = "all",
  Owner = "owner",
  Public = "public",
  Private = "private",
  Member = "member",
}

/**
 * Limit results to repositories with the specified visibility.
 */
export enum ReposListForAuthenticatedUserVisibilityEnum {
  All = "all",
  Public = "public",
  Private = "private",
}

export class ReposListForAuthenticatedUserRequest extends SpeakeasyBase {
  /**
   * Comma-separated list of values. Can include:
   *
   * @remarks
   *  * `owner`: Repositories that are owned by the authenticated user.
   *  * `collaborator`: Repositories that the user has been added to as a collaborator.
   *  * `organization_member`: Repositories that the user has access to through being a member of an organization. This includes every repository on every team that the user is on.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=affiliation",
  })
  affiliation?: string;

  /**
   * Only show notifications updated before the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=before;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ",
  })
  before?: Date;

  /**
   * The order to sort by. Default: `asc` when using `full_name`, otherwise `desc`.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=direction",
  })
  direction?: ReposListForAuthenticatedUserDirectionEnum;

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
   * Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=since;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ",
  })
  since?: Date;

  /**
   * The property to sort the results by.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: ReposListForAuthenticatedUserSortEnum;

  /**
   * Limit results to repositories of the specified type. Will cause a `422` error if used in the same request as **visibility** or **affiliation**.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: ReposListForAuthenticatedUserTypeEnum;

  /**
   * Limit results to repositories with the specified visibility.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=visibility",
  })
  visibility?: ReposListForAuthenticatedUserVisibilityEnum;
}

export class ReposListForAuthenticatedUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Requires authentication
   */
  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  /**
   * Response
   */
  @SpeakeasyMetadata({ elemType: shared.Repository })
  repositories?: shared.Repository[];

  /**
   * Validation failed, or the endpoint has been spammed.
   */
  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}

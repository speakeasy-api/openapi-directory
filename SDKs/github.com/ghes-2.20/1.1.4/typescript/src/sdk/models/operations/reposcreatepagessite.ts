/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * The repository branch used to publish your site's source files. Can be either `master` or `gh-pages`.
 */
export enum ReposCreatePagesSiteRequestBodySourceBranchEnum {
  Master = "master",
  GhPages = "gh-pages",
}

/**
 * The repository directory that includes the source files for the Pages site. When `branch` is `master`, you can change `path` to `/docs`. When `branch` is `gh-pages`, you are unable to specify a `path` other than `/`.
 */
export enum ReposCreatePagesSiteRequestBodySourcePathEnum {
  Root = "/",
  RootDocs = "/docs",
}

/**
 * The source branch and directory used to publish your Pages site.
 */
export class ReposCreatePagesSiteRequestBodySource extends SpeakeasyBase {
  /**
   * The repository branch used to publish your site's source files. Can be either `master` or `gh-pages`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "branch" })
  branch: ReposCreatePagesSiteRequestBodySourceBranchEnum;

  /**
   * The repository directory that includes the source files for the Pages site. When `branch` is `master`, you can change `path` to `/docs`. When `branch` is `gh-pages`, you are unable to specify a `path` other than `/`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "path" })
  path?: ReposCreatePagesSiteRequestBodySourcePathEnum;
}

/**
 * The source branch and directory used to publish your Pages site.
 */
export class ReposCreatePagesSiteRequestBody extends SpeakeasyBase {
  /**
   * The source branch and directory used to publish your Pages site.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "source" })
  @Type(() => ReposCreatePagesSiteRequestBodySource)
  source: ReposCreatePagesSiteRequestBodySource;
}

export class ReposCreatePagesSiteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody: ReposCreatePagesSiteRequestBody;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=owner",
  })
  owner: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=repo",
  })
  repo: string;
}

/**
 * Preview header missing
 */
export class ReposCreatePagesSite415ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "documentation_url" })
  documentationUrl: string;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;
}

export class ReposCreatePagesSiteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Conflict
   */
  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  /**
   * Response
   */
  @SpeakeasyMetadata()
  page?: shared.Page;

  /**
   * Preview header missing
   */
  @SpeakeasyMetadata()
  reposCreatePagesSite415ApplicationJSONObject?: ReposCreatePagesSite415ApplicationJSON;

  /**
   * Validation failed
   */
  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}

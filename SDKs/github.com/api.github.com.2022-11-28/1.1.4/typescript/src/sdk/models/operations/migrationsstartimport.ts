/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

/**
 * The originating VCS type. Without this parameter, the import job will take additional time to detect the VCS type before beginning the import. This detection step will be reflected in the response.
 */
export enum MigrationsStartImportRequestBodyVcsEnum {
  Subversion = "subversion",
  Git = "git",
  Mercurial = "mercurial",
  Tfvc = "tfvc",
}

export class MigrationsStartImportRequestBody extends SpeakeasyBase {
  /**
   * For a tfvc import, the name of the project that is being imported.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "tfvc_project" })
  tfvcProject?: string;

  /**
   * The originating VCS type. Without this parameter, the import job will take additional time to detect the VCS type before beginning the import. This detection step will be reflected in the response.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "vcs" })
  vcs?: MigrationsStartImportRequestBodyVcsEnum;

  /**
   * If authentication is required, the password to provide to `vcs_url`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "vcs_password" })
  vcsPassword?: string;

  /**
   * The URL of the originating repository.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "vcs_url" })
  vcsUrl: string;

  /**
   * If authentication is required, the username to provide to `vcs_url`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "vcs_username" })
  vcsUsername?: string;
}

export class MigrationsStartImportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody: MigrationsStartImportRequestBody;

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

export class MigrationsStartImportResponse extends SpeakeasyBase {
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
  @SpeakeasyMetadata()
  import?: shared.Import;

  /**
   * Validation failed, or the endpoint has been spammed.
   */
  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}

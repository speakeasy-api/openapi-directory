/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class CodespacesGetCodespacesForUserInOrgRequest extends SpeakeasyBase {
  /**
   * The organization name. The name is not case sensitive.
   */
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

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
   * The handle for the GitHub user account.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=username",
  })
  username: string;
}

/**
 * Response
 */
export class CodespacesGetCodespacesForUserInOrg200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Codespace })
  @Expose({ name: "codespaces" })
  @Type(() => shared.Codespace)
  codespaces: shared.Codespace[];

  @SpeakeasyMetadata()
  @Expose({ name: "total_count" })
  totalCount: number;
}

export class CodespacesGetCodespacesForUserInOrgResponse extends SpeakeasyBase {
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
  @SpeakeasyMetadata()
  codespacesGetCodespacesForUserInOrg200ApplicationJSONObject?: CodespacesGetCodespacesForUserInOrg200ApplicationJSON;
}

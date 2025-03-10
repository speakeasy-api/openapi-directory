/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetProjectUsernameProjectBuildNumTestsRequest extends SpeakeasyBase {
  /**
   * XXXXXXXXXX
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=build_num",
  })
  buildNum: number;

  /**
   * XXXXXXXXX
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=project",
  })
  project: string;

  /**
   * XXXXXXXXX
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=username",
  })
  username: string;
}

export class GetProjectUsernameProjectBuildNumTestsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * test metadata for a build
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  tests?: shared.Tests;
}

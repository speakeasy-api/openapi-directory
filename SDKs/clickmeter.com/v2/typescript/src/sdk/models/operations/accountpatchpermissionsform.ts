/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

/**
 * Can be "datapoint" or "group"
 */
export enum AccountPatchPermissionsFormTypeEnum {
  Datapoint = "datapoint",
  Group = "group",
}

export class AccountPatchPermissionsFormRequest extends SpeakeasyBase {
  /**
   * The patch permission request
   */
  @SpeakeasyMetadata({
    data: "request, media_type=application/x-www-form-urlencoded",
  })
  apiCoreRequestsPermissionPatchRequest: shared.ApiCoreRequestsPermissionPatchRequest;

  /**
   * Id of the guest
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=guestId",
  })
  guestId: number;

  /**
   * Can be "datapoint" or "group"
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=type",
  })
  type: AccountPatchPermissionsFormTypeEnum;
}

export class AccountPatchPermissionsFormResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}

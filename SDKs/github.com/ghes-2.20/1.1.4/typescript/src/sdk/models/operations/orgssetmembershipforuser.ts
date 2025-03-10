/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

/**
 * The role to give the user in the organization. Can be one of:
 *
 * @remarks
 * \* `admin` - The user will become an owner of the organization.
 * \* `member` - The user will become a non-owner member of the organization.
 */
export enum OrgsSetMembershipForUserRequestBodyRoleEnum {
  Admin = "admin",
  Member = "member",
}

export class OrgsSetMembershipForUserRequestBody extends SpeakeasyBase {
  /**
   * The role to give the user in the organization. Can be one of:
   *
   * @remarks
   * \* `admin` - The user will become an owner of the organization.
   * \* `member` - The user will become a non-owner member of the organization.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "role" })
  role?: OrgsSetMembershipForUserRequestBodyRoleEnum;
}

export class OrgsSetMembershipForUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: OrgsSetMembershipForUserRequestBody;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=username",
  })
  username: string;
}

export class OrgsSetMembershipForUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Forbidden
   */
  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  /**
   * Response
   */
  @SpeakeasyMetadata()
  orgMembership?: shared.OrgMembership;

  /**
   * Validation failed
   */
  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}

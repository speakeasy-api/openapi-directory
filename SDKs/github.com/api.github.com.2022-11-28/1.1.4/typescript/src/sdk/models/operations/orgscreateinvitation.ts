/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

/**
 * The role for the new member.
 *
 * @remarks
 *  * `admin` - Organization owners with full administrative rights to the organization and complete access to all repositories and teams.
 *  * `direct_member` - Non-owner organization members with ability to see other members and join teams by invitation.
 *  * `billing_manager` - Non-owner organization members with ability to manage the billing settings of your organization.
 */
export enum OrgsCreateInvitationRequestBodyRoleEnum {
  Admin = "admin",
  DirectMember = "direct_member",
  BillingManager = "billing_manager",
}

export class OrgsCreateInvitationRequestBody extends SpeakeasyBase {
  /**
   * **Required unless you provide `invitee_id`**. Email address of the person you are inviting, which can be an existing GitHub user.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email?: string;

  /**
   * **Required unless you provide `email`**. GitHub user ID for the person you are inviting.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "invitee_id" })
  inviteeId?: number;

  /**
   * The role for the new member.
   *
   * @remarks
   *  * `admin` - Organization owners with full administrative rights to the organization and complete access to all repositories and teams.
   *  * `direct_member` - Non-owner organization members with ability to see other members and join teams by invitation.
   *  * `billing_manager` - Non-owner organization members with ability to manage the billing settings of your organization.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "role" })
  role?: OrgsCreateInvitationRequestBodyRoleEnum;

  /**
   * Specify IDs for the teams you want to invite new members to.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "team_ids" })
  teamIds?: number[];
}

export class OrgsCreateInvitationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: OrgsCreateInvitationRequestBody;

  /**
   * The organization name. The name is not case sensitive.
   */
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}

export class OrgsCreateInvitationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

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
  organizationInvitation?: shared.OrganizationInvitation;

  /**
   * Validation failed, or the endpoint has been spammed.
   */
  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}

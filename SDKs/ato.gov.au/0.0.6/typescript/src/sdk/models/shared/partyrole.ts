/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

/**
 * The party's role type.
 */
export enum PartyRolePartyRoleTypeEnum {
  Director = "Director",
  Employee = "Employee",
  Member = "Member",
  Partner = "Partner",
  Trustee = "Trustee",
}

/**
 * The related party's role type.
 */
export enum PartyRoleRelatedPartyRoleTypeEnum {
  Association = "Association",
  Company = "Company",
  Employer = "Employer",
  Organisation = "Organisation",
  Partnership = "Partnership",
  Trust = "Trust",
}

/**
 * The relationship type.
 */
export enum PartyRoleRelationshipTypeEnum {
  Directorship = "Directorship",
  Employment = "Employment",
  Membership = "Membership",
  Partnership = "Partnership",
  Trusteeship = "Trusteeship",
}

/**
 * The Party Role resource.
 */
export class PartyRoleInput extends SpeakeasyBase {
  /**
   * The party's role type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "partyRoleType" })
  partyRoleType?: PartyRolePartyRoleTypeEnum;

  /**
   * The related party's unique identifier.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "relatedPartyId" })
  relatedPartyId: string;

  /**
   * The related party's role type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "relatedPartyRoleType" })
  relatedPartyRoleType?: PartyRoleRelatedPartyRoleTypeEnum;

  /**
   * The relationship type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "relationshipType" })
  relationshipType: PartyRoleRelationshipTypeEnum;
}

/**
 * The Party Role resource.
 */
export class PartyRole extends SpeakeasyBase {
  /**
   * The date and time the resource became active in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "fromDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  fromDate?: Date;

  /**
   * The resource's unique identifier.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * The party's role type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "partyRoleType" })
  partyRoleType?: PartyRolePartyRoleTypeEnum;

  /**
   * The related party's unique identifier.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "relatedPartyId" })
  relatedPartyId: string;

  /**
   * The related party's role type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "relatedPartyRoleType" })
  relatedPartyRoleType?: PartyRoleRelatedPartyRoleTypeEnum;

  /**
   * The relationship type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "relationshipType" })
  relationshipType: PartyRoleRelationshipTypeEnum;

  /**
   * The date and time the resource became inactive in the format defined by [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "toDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  toDate?: Date;
}

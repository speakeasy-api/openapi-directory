/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ClassificationDetails } from "./classificationdetails";
import { FindingCategoryEnum } from "./findingcategoryenum";
import { FindingTypeEnum } from "./findingtypeenum";
import { PolicyDetails } from "./policydetails";
import { ResourcesAffected } from "./resourcesaffected";
import { Severity } from "./severity";
import { Expose, Transform, Type } from "class-transformer";

/**
 * Provides the details of a finding.
 */
export class Finding extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountId" })
  accountId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "archived" })
  archived?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "category" })
  category?: FindingCategoryEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "classificationDetails" })
  @Type(() => ClassificationDetails)
  classificationDetails?: ClassificationDetails;

  @SpeakeasyMetadata()
  @Expose({ name: "count" })
  count?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "createdAt" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "partition" })
  partition?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "policyDetails" })
  @Type(() => PolicyDetails)
  policyDetails?: PolicyDetails;

  @SpeakeasyMetadata()
  @Expose({ name: "region" })
  region?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "resourcesAffected" })
  @Type(() => ResourcesAffected)
  resourcesAffected?: ResourcesAffected;

  @SpeakeasyMetadata()
  @Expose({ name: "sample" })
  sample?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "schemaVersion" })
  schemaVersion?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "severity" })
  @Type(() => Severity)
  severity?: Severity;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: FindingTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "updatedAt" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt?: Date;
}

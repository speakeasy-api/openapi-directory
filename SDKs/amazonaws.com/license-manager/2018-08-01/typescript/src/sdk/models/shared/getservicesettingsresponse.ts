/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { OrganizationConfiguration } from "./organizationconfiguration";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class GetServiceSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "EnableCrossAccountsDiscovery" })
  enableCrossAccountsDiscovery?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "LicenseManagerResourceShareArn" })
  licenseManagerResourceShareArn?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "OrganizationConfiguration" })
  @Type(() => OrganizationConfiguration)
  organizationConfiguration?: OrganizationConfiguration;

  @SpeakeasyMetadata()
  @Expose({ name: "S3BucketArn" })
  s3BucketArn?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "SnsTopicArn" })
  snsTopicArn?: string;
}

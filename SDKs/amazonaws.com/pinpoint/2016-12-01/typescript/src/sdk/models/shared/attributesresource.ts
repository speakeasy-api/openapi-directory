/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Provides information about the type and the names of attributes that were removed from all the endpoints that are associated with an application.
 */
export class AttributesResource extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "ApplicationId" })
  applicationId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "AttributeType" })
  attributeType: string;

  @SpeakeasyMetadata()
  @Expose({ name: "Attributes" })
  attributes?: string[];
}

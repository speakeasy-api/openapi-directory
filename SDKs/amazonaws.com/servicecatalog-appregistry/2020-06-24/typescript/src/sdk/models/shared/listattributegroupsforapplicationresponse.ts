/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AttributeGroupDetails } from "./attributegroupdetails";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class ListAttributeGroupsForApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AttributeGroupDetails })
  @Expose({ name: "attributeGroupsDetails" })
  @Type(() => AttributeGroupDetails)
  attributeGroupsDetails?: AttributeGroupDetails[];

  @SpeakeasyMetadata()
  @Expose({ name: "nextToken" })
  nextToken?: string;
}

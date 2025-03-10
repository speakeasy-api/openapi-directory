/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AssociationVersionInfo } from "./associationversioninfo";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class ListAssociationVersionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AssociationVersionInfo })
  @Expose({ name: "AssociationVersions" })
  @Type(() => AssociationVersionInfo)
  associationVersions?: AssociationVersionInfo[];

  @SpeakeasyMetadata()
  @Expose({ name: "NextToken" })
  nextToken?: string;
}

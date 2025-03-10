/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { FailedItem } from "./faileditem";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class BatchAssociateResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: FailedItem })
  @Expose({ name: "FailedItems" })
  @Type(() => FailedItem)
  failedItems: FailedItem[];

  @SpeakeasyMetadata()
  @Expose({ name: "ResourceSetIdentifier" })
  resourceSetIdentifier: string;
}

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PendingMaintenanceAction } from "./pendingmaintenanceaction";
import { Expose, Type } from "class-transformer";

/**
 * Identifies an DMS resource and any pending actions for it.
 */
export class ResourcePendingMaintenanceActions extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PendingMaintenanceAction })
  @Expose({ name: "PendingMaintenanceActionDetails" })
  @Type(() => PendingMaintenanceAction)
  pendingMaintenanceActionDetails?: PendingMaintenanceAction[];

  @SpeakeasyMetadata()
  @Expose({ name: "ResourceIdentifier" })
  resourceIdentifier?: string;
}

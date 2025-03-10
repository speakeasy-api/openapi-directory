/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DesiredConfiguration } from "./desiredconfiguration";
import { InstanceRefreshProgressDetails } from "./instancerefreshprogressdetails";
import { InstanceRefreshStatusEnum } from "./instancerefreshstatusenum";
import { RefreshPreferences } from "./refreshpreferences";
import { RollbackDetails } from "./rollbackdetails";

/**
 * Describes an instance refresh for an Auto Scaling group.
 */
export class InstanceRefresh extends SpeakeasyBase {
  @SpeakeasyMetadata()
  autoScalingGroupName?: string;

  @SpeakeasyMetadata()
  desiredConfiguration?: DesiredConfiguration;

  @SpeakeasyMetadata()
  endTime?: Date;

  @SpeakeasyMetadata()
  instanceRefreshId?: string;

  @SpeakeasyMetadata()
  instancesToUpdate?: number;

  @SpeakeasyMetadata()
  percentageComplete?: number;

  /**
   * Describes the preferences for an instance refresh.
   */
  @SpeakeasyMetadata()
  preferences?: RefreshPreferences;

  @SpeakeasyMetadata()
  progressDetails?: InstanceRefreshProgressDetails;

  @SpeakeasyMetadata()
  rollbackDetails?: RollbackDetails;

  @SpeakeasyMetadata()
  startTime?: Date;

  @SpeakeasyMetadata()
  status?: InstanceRefreshStatusEnum;

  @SpeakeasyMetadata()
  statusReason?: string;
}

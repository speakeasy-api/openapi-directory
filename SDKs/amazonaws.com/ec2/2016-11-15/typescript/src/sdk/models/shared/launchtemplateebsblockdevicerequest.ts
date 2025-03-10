/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { VolumeTypeEnum } from "./volumetypeenum";

/**
 * The parameters for a block device for an EBS volume.
 */
export class LaunchTemplateEbsBlockDeviceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  deleteOnTermination?: boolean;

  @SpeakeasyMetadata()
  encrypted?: boolean;

  @SpeakeasyMetadata()
  iops?: number;

  @SpeakeasyMetadata()
  kmsKeyId?: string;

  @SpeakeasyMetadata()
  snapshotId?: string;

  @SpeakeasyMetadata()
  throughput?: number;

  @SpeakeasyMetadata()
  volumeSize?: number;

  @SpeakeasyMetadata()
  volumeType?: VolumeTypeEnum;
}

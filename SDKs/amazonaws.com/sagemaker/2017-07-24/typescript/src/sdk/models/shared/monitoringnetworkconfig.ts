/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { VpcConfig } from "./vpcconfig";
import { Expose, Type } from "class-transformer";

/**
 * The networking configuration for the monitoring job.
 */
export class MonitoringNetworkConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "EnableInterContainerTrafficEncryption" })
  enableInterContainerTrafficEncryption?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "EnableNetworkIsolation" })
  enableNetworkIsolation?: boolean;

  /**
   * Specifies a VPC that your training jobs and hosted models have access to. Control access to and from your training and model containers by configuring the VPC. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual Private Cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs by Using an Amazon Virtual Private Cloud</a>.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "VpcConfig" })
  @Type(() => VpcConfig)
  vpcConfig?: VpcConfig;
}

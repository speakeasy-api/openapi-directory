/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AwsVpcConfiguration } from "./awsvpcconfiguration";
import { Expose, Type } from "class-transformer";

/**
 * This structure specifies the network configuration for an ECS task.
 */
export class NetworkConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "awsvpcConfiguration" })
  @Type(() => AwsVpcConfiguration)
  awsvpcConfiguration?: AwsVpcConfiguration;
}

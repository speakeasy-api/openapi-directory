/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { VPCEConfiguration } from "./vpceconfiguration";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class ListVPCEConfigurationsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: VPCEConfiguration })
  @Expose({ name: "vpceConfigurations" })
  @Type(() => VPCEConfiguration)
  vpceConfigurations?: VPCEConfiguration[];
}

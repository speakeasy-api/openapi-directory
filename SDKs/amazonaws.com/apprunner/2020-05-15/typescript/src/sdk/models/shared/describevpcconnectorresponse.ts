/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { VpcConnector } from "./vpcconnector";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class DescribeVpcConnectorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "VpcConnector" })
  @Type(() => VpcConnector)
  vpcConnector: VpcConnector;
}

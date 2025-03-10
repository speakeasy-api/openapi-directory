/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CustomRoutingEndpointGroup } from "./customroutingendpointgroup";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class DescribeCustomRoutingEndpointGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "EndpointGroup" })
  @Type(() => CustomRoutingEndpointGroup)
  endpointGroup?: CustomRoutingEndpointGroup;
}

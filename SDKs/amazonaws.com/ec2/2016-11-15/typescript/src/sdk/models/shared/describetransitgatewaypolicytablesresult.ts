/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

/**
 * The state of the transit gateway policy table
 */
export enum DescribeTransitGatewayPolicyTablesResultTransitGatewayPolicyTablesStateEnum {
  Pending = "pending",
  Available = "available",
  Deleting = "deleting",
  Deleted = "deleted",
}

/**
 * Describes a tag.
 */
export class DescribeTransitGatewayPolicyTablesResultTransitGatewayPolicyTablesTags extends SpeakeasyBase {
  @SpeakeasyMetadata()
  key?: string;

  @SpeakeasyMetadata()
  value?: string;
}

/**
 * Describes a transit gateway policy table.
 */
export class DescribeTransitGatewayPolicyTablesResultTransitGatewayPolicyTables extends SpeakeasyBase {
  @SpeakeasyMetadata()
  creationTime?: Date;

  @SpeakeasyMetadata()
  state?: DescribeTransitGatewayPolicyTablesResultTransitGatewayPolicyTablesStateEnum;

  @SpeakeasyMetadata({
    elemType:
      DescribeTransitGatewayPolicyTablesResultTransitGatewayPolicyTablesTags,
  })
  tags?: DescribeTransitGatewayPolicyTablesResultTransitGatewayPolicyTablesTags[];

  @SpeakeasyMetadata()
  transitGatewayId?: string;

  @SpeakeasyMetadata()
  transitGatewayPolicyTableId?: string;
}

/**
 * Success
 */
export class DescribeTransitGatewayPolicyTablesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata({
    elemType:
      DescribeTransitGatewayPolicyTablesResultTransitGatewayPolicyTables,
  })
  transitGatewayPolicyTables?: DescribeTransitGatewayPolicyTablesResultTransitGatewayPolicyTables[];
}

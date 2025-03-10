/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { StatusEnum } from "./statusenum";
import { Expose } from "class-transformer";

/**
 * A control panel represents a group of routing controls that can be changed together in a single transaction.
 */
export class ControlPanel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "ClusterArn" })
  clusterArn?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ControlPanelArn" })
  controlPanelArn?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "DefaultControlPanel" })
  defaultControlPanel?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "Name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "RoutingControlCount" })
  routingControlCount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "Status" })
  status?: StatusEnum;
}

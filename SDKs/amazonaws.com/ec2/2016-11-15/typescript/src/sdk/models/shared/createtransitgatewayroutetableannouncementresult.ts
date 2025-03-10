/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

/**
 * The direction for the route table announcement.
 */
export enum CreateTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementAnnouncementDirectionEnum {
  Outgoing = "outgoing",
  Incoming = "incoming",
}

/**
 * The state of the transit gateway announcement.
 */
export enum CreateTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementStateEnum {
  Available = "available",
  Pending = "pending",
  Failing = "failing",
  Failed = "failed",
  Deleting = "deleting",
  Deleted = "deleted",
}

/**
 * Describes a tag.
 */
export class CreateTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementTags extends SpeakeasyBase {
  @SpeakeasyMetadata()
  key?: string;

  @SpeakeasyMetadata()
  value?: string;
}

/**
 * Provides details about the transit gateway route table announcement.
 */
export class CreateTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncement extends SpeakeasyBase {
  @SpeakeasyMetadata()
  announcementDirection?: CreateTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementAnnouncementDirectionEnum;

  @SpeakeasyMetadata()
  coreNetworkId?: string;

  @SpeakeasyMetadata()
  creationTime?: Date;

  @SpeakeasyMetadata()
  peerCoreNetworkId?: string;

  @SpeakeasyMetadata()
  peerTransitGatewayId?: string;

  @SpeakeasyMetadata()
  peeringAttachmentId?: string;

  @SpeakeasyMetadata()
  state?: CreateTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementStateEnum;

  @SpeakeasyMetadata({
    elemType:
      CreateTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementTags,
  })
  tags?: CreateTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncementTags[];

  @SpeakeasyMetadata()
  transitGatewayId?: string;

  @SpeakeasyMetadata()
  transitGatewayRouteTableAnnouncementId?: string;

  @SpeakeasyMetadata()
  transitGatewayRouteTableId?: string;
}

/**
 * Success
 */
export class CreateTransitGatewayRouteTableAnnouncementResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  transitGatewayRouteTableAnnouncement?: CreateTransitGatewayRouteTableAnnouncementResultTransitGatewayRouteTableAnnouncement;
}

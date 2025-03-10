/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AgentUpdateStatusEnum } from "./agentupdatestatusenum";
import { Attachment } from "./attachment";
import { Attribute } from "./attribute";
import { ContainerInstanceHealthStatus } from "./containerinstancehealthstatus";
import { Resource } from "./resource";
import { Tag } from "./tag";
import { VersionInfo } from "./versioninfo";
import { Expose, Transform, Type } from "class-transformer";

/**
 * An Amazon EC2 or External instance that's running the Amazon ECS agent and has been registered with a cluster.
 */
export class ContainerInstance extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "agentConnected" })
  agentConnected?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "agentUpdateStatus" })
  agentUpdateStatus?: AgentUpdateStatusEnum;

  @SpeakeasyMetadata({ elemType: Attachment })
  @Expose({ name: "attachments" })
  @Type(() => Attachment)
  attachments?: Attachment[];

  @SpeakeasyMetadata({ elemType: Attribute })
  @Expose({ name: "attributes" })
  @Type(() => Attribute)
  attributes?: Attribute[];

  @SpeakeasyMetadata()
  @Expose({ name: "capacityProviderName" })
  capacityProviderName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "containerInstanceArn" })
  containerInstanceArn?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ec2InstanceId" })
  ec2InstanceId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "healthStatus" })
  @Type(() => ContainerInstanceHealthStatus)
  healthStatus?: ContainerInstanceHealthStatus;

  @SpeakeasyMetadata()
  @Expose({ name: "pendingTasksCount" })
  pendingTasksCount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "registeredAt" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  registeredAt?: Date;

  @SpeakeasyMetadata({ elemType: Resource })
  @Expose({ name: "registeredResources" })
  @Type(() => Resource)
  registeredResources?: Resource[];

  @SpeakeasyMetadata({ elemType: Resource })
  @Expose({ name: "remainingResources" })
  @Type(() => Resource)
  remainingResources?: Resource[];

  @SpeakeasyMetadata()
  @Expose({ name: "runningTasksCount" })
  runningTasksCount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "statusReason" })
  statusReason?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  @Expose({ name: "tags" })
  @Type(() => Tag)
  tags?: Tag[];

  @SpeakeasyMetadata()
  @Expose({ name: "version" })
  version?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "versionInfo" })
  @Type(() => VersionInfo)
  versionInfo?: VersionInfo;
}

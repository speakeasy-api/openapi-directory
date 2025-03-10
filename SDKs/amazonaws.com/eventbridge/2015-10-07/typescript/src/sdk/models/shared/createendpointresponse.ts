/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { EndpointEventBus } from "./endpointeventbus";
import { EndpointStateEnum } from "./endpointstateenum";
import { ReplicationConfig } from "./replicationconfig";
import { RoutingConfig } from "./routingconfig";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class CreateEndpointResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "Arn" })
  arn?: string;

  @SpeakeasyMetadata({ elemType: EndpointEventBus })
  @Expose({ name: "EventBuses" })
  @Type(() => EndpointEventBus)
  eventBuses?: EndpointEventBus[];

  @SpeakeasyMetadata()
  @Expose({ name: "Name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ReplicationConfig" })
  @Type(() => ReplicationConfig)
  replicationConfig?: ReplicationConfig;

  @SpeakeasyMetadata()
  @Expose({ name: "RoleArn" })
  roleArn?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "RoutingConfig" })
  @Type(() => RoutingConfig)
  routingConfig?: RoutingConfig;

  @SpeakeasyMetadata()
  @Expose({ name: "State" })
  state?: EndpointStateEnum;
}

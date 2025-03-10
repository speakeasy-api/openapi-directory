/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ECSTaskSet } from "./ecstaskset";
import { LifecycleEvent } from "./lifecycleevent";
import { TargetStatusEnum } from "./targetstatusenum";
import { Expose, Transform, Type } from "class-transformer";

/**
 *  Information about the target of an Amazon ECS deployment.
 */
export class ECSTarget extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "deploymentId" })
  deploymentId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "lastUpdatedAt" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  lastUpdatedAt?: Date;

  @SpeakeasyMetadata({ elemType: LifecycleEvent })
  @Expose({ name: "lifecycleEvents" })
  @Type(() => LifecycleEvent)
  lifecycleEvents?: LifecycleEvent[];

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: TargetStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "targetArn" })
  targetArn?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "targetId" })
  targetId?: string;

  @SpeakeasyMetadata({ elemType: ECSTaskSet })
  @Expose({ name: "taskSetsInfo" })
  @Type(() => ECSTaskSet)
  taskSetsInfo?: ECSTaskSet[];
}

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ComponentConfiguration } from "./componentconfiguration";
import { ContainerTypeEnum } from "./containertypeenum";
import { InstanceConfiguration } from "./instanceconfiguration";
import { PlatformEnum } from "./platformenum";
import { TargetContainerRepository } from "./targetcontainerrepository";
import { Expose, Type } from "class-transformer";

/**
 * A container recipe.
 */
export class ContainerRecipe extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "arn" })
  arn?: string;

  @SpeakeasyMetadata({ elemType: ComponentConfiguration })
  @Expose({ name: "components" })
  @Type(() => ComponentConfiguration)
  components?: ComponentConfiguration[];

  @SpeakeasyMetadata()
  @Expose({ name: "containerType" })
  containerType?: ContainerTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "dateCreated" })
  dateCreated?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "dockerfileTemplateData" })
  dockerfileTemplateData?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "encrypted" })
  encrypted?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "instanceConfiguration" })
  @Type(() => InstanceConfiguration)
  instanceConfiguration?: InstanceConfiguration;

  @SpeakeasyMetadata()
  @Expose({ name: "kmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "owner" })
  owner?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parentImage" })
  parentImage?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "platform" })
  platform?: PlatformEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "tags" })
  tags?: Record<string, string>;

  @SpeakeasyMetadata()
  @Expose({ name: "targetRepository" })
  @Type(() => TargetContainerRepository)
  targetRepository?: TargetContainerRepository;

  @SpeakeasyMetadata()
  @Expose({ name: "version" })
  version?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "workingDirectory" })
  workingDirectory?: string;
}

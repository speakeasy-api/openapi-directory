/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ActorDefinitionResourceRequirements } from "./actordefinitionresourcerequirements";
import { Expose, Type } from "class-transformer";

export class SourceDefinitionCreate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "dockerImageTag" })
  dockerImageTag: string;

  @SpeakeasyMetadata()
  @Expose({ name: "dockerRepository" })
  dockerRepository: string;

  @SpeakeasyMetadata()
  @Expose({ name: "documentationUrl" })
  documentationUrl: string;

  @SpeakeasyMetadata()
  @Expose({ name: "icon" })
  icon?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  /**
   * actor definition specific resource requirements. if default is set, these are the requirements that should be set for ALL jobs run for this actor definition. it is overriden by the job type specific configurations. if not set, the platform will use defaults. these values will be overriden by configuration at the connection level.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "resourceRequirements" })
  @Type(() => ActorDefinitionResourceRequirements)
  resourceRequirements?: ActorDefinitionResourceRequirements;
}

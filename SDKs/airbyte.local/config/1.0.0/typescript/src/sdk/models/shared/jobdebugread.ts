/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DestinationDefinitionRead } from "./destinationdefinitionread";
import { JobConfigTypeEnum } from "./jobconfigtypeenum";
import { JobStatusEnum } from "./jobstatusenum";
import { SourceDefinitionRead } from "./sourcedefinitionread";
import { Expose, Type } from "class-transformer";

export class JobDebugRead extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "airbyteVersion" })
  airbyteVersion: string;

  @SpeakeasyMetadata()
  @Expose({ name: "configId" })
  configId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "configType" })
  configType: JobConfigTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "destinationDefinition" })
  @Type(() => DestinationDefinitionRead)
  destinationDefinition: DestinationDefinitionRead;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: number;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceDefinition" })
  @Type(() => SourceDefinitionRead)
  sourceDefinition: SourceDefinitionRead;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: JobStatusEnum;
}

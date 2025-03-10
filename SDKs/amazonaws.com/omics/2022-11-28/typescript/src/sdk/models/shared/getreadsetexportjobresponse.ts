/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ExportReadSetDetail } from "./exportreadsetdetail";
import { ReadSetExportJobStatusEnum } from "./readsetexportjobstatusenum";
import { Expose, Transform, Type } from "class-transformer";

/**
 * Success
 */
export class GetReadSetExportJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "completionTime" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  completionTime?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "creationTime" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  creationTime: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "destination" })
  destination: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata({ elemType: ExportReadSetDetail })
  @Expose({ name: "readSets" })
  @Type(() => ExportReadSetDetail)
  readSets?: ExportReadSetDetail[];

  @SpeakeasyMetadata()
  @Expose({ name: "sequenceStoreId" })
  sequenceStoreId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: ReadSetExportJobStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "statusMessage" })
  statusMessage?: string;
}

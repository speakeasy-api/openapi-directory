/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AntipatternReportStatusEnum } from "./antipatternreportstatusenum";
import { AntipatternSeveritySummary } from "./antipatternseveritysummary";
import { AppTypeEnum } from "./apptypeenum";
import { AppUnitError } from "./appuniterror";
import { DatabaseConfigDetail } from "./databaseconfigdetail";
import { InclusionStatusEnum } from "./inclusionstatusenum";
import { RecommendationSet } from "./recommendationset";
import { ResourceSubTypeEnum } from "./resourcesubtypeenum";
import { Result } from "./result";
import { RuntimeAnalysisStatusEnum } from "./runtimeanalysisstatusenum";
import { S3Object } from "./s3object";
import { SourceCodeRepository } from "./sourcecoderepository";
import { SrcCodeOrDbAnalysisStatusEnum } from "./srccodeordbanalysisstatusenum";
import { Expose, Transform, Type } from "class-transformer";

/**
 *  Contains detailed information about an application component.
 */
export class ApplicationComponentDetail extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "analysisStatus" })
  analysisStatus?: SrcCodeOrDbAnalysisStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "antipatternReportS3Object" })
  @Type(() => S3Object)
  antipatternReportS3Object?: S3Object;

  @SpeakeasyMetadata()
  @Expose({ name: "antipatternReportStatus" })
  antipatternReportStatus?: AntipatternReportStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "antipatternReportStatusMessage" })
  antipatternReportStatusMessage?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "appType" })
  appType?: AppTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "appUnitError" })
  @Type(() => AppUnitError)
  appUnitError?: AppUnitError;

  @SpeakeasyMetadata()
  @Expose({ name: "associatedServerId" })
  associatedServerId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "databaseConfigDetail" })
  @Type(() => DatabaseConfigDetail)
  databaseConfigDetail?: DatabaseConfigDetail;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "inclusionStatus" })
  inclusionStatus?: InclusionStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "lastAnalyzedTimestamp" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  lastAnalyzedTimestamp?: Date;

  @SpeakeasyMetadata({ elemType: AntipatternSeveritySummary })
  @Expose({ name: "listAntipatternSeveritySummary" })
  @Type(() => AntipatternSeveritySummary)
  listAntipatternSeveritySummary?: AntipatternSeveritySummary[];

  @SpeakeasyMetadata()
  @Expose({ name: "moreServerAssociationExists" })
  moreServerAssociationExists?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "osDriver" })
  osDriver?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "osVersion" })
  osVersion?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "recommendationSet" })
  @Type(() => RecommendationSet)
  recommendationSet?: RecommendationSet;

  @SpeakeasyMetadata()
  @Expose({ name: "resourceSubType" })
  resourceSubType?: ResourceSubTypeEnum;

  @SpeakeasyMetadata({ elemType: Result })
  @Expose({ name: "resultList" })
  @Type(() => Result)
  resultList?: Result[];

  @SpeakeasyMetadata()
  @Expose({ name: "runtimeStatus" })
  runtimeStatus?: RuntimeAnalysisStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "runtimeStatusMessage" })
  runtimeStatusMessage?: string;

  @SpeakeasyMetadata({ elemType: SourceCodeRepository })
  @Expose({ name: "sourceCodeRepositories" })
  @Type(() => SourceCodeRepository)
  sourceCodeRepositories?: SourceCodeRepository[];

  @SpeakeasyMetadata()
  @Expose({ name: "statusMessage" })
  statusMessage?: string;
}

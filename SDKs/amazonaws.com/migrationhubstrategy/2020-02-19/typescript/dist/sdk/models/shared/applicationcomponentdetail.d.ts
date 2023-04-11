import { SpeakeasyBase } from "../../../internal/utils";
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
/**
 *  Contains detailed information about an application component.
 */
export declare class ApplicationComponentDetail extends SpeakeasyBase {
    analysisStatus?: SrcCodeOrDbAnalysisStatusEnum;
    antipatternReportS3Object?: S3Object;
    antipatternReportStatus?: AntipatternReportStatusEnum;
    antipatternReportStatusMessage?: string;
    appType?: AppTypeEnum;
    appUnitError?: AppUnitError;
    associatedServerId?: string;
    databaseConfigDetail?: DatabaseConfigDetail;
    id?: string;
    inclusionStatus?: InclusionStatusEnum;
    lastAnalyzedTimestamp?: Date;
    listAntipatternSeveritySummary?: AntipatternSeveritySummary[];
    moreServerAssociationExists?: boolean;
    name?: string;
    osDriver?: string;
    osVersion?: string;
    recommendationSet?: RecommendationSet;
    resourceSubType?: ResourceSubTypeEnum;
    resultList?: Result[];
    runtimeStatus?: RuntimeAnalysisStatusEnum;
    runtimeStatusMessage?: string;
    sourceCodeRepositories?: SourceCodeRepository[];
    statusMessage?: string;
}

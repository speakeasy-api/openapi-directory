import { SpeakeasyBase } from "../../../internal/utils";
import { ModelCardExportJobStatusEnum } from "./modelcardexportjobstatusenum";
/**
 * The summary of the Amazon SageMaker Model Card export job.
 */
export declare class ModelCardExportJobSummary extends SpeakeasyBase {
    createdAt: Date;
    lastModifiedAt: Date;
    modelCardExportJobArn: string;
    modelCardExportJobName: string;
    modelCardName: string;
    modelCardVersion: number;
    status: ModelCardExportJobStatusEnum;
}

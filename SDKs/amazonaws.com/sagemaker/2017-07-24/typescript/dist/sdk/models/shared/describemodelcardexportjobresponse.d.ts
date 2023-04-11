import { SpeakeasyBase } from "../../../internal/utils";
import { ModelCardExportArtifacts } from "./modelcardexportartifacts";
import { ModelCardExportJobStatusEnum } from "./modelcardexportjobstatusenum";
import { ModelCardExportOutputConfig } from "./modelcardexportoutputconfig";
/**
 * Success
 */
export declare class DescribeModelCardExportJobResponse extends SpeakeasyBase {
    createdAt: Date;
    exportArtifacts?: ModelCardExportArtifacts;
    failureReason?: string;
    lastModifiedAt: Date;
    modelCardExportJobArn: string;
    modelCardExportJobName: string;
    modelCardName: string;
    modelCardVersion: number;
    outputConfig: ModelCardExportOutputConfig;
    status: ModelCardExportJobStatusEnum;
}

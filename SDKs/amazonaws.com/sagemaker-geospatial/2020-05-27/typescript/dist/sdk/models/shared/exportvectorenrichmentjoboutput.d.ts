import { SpeakeasyBase } from "../../../internal/utils";
import { ExportVectorEnrichmentJobOutputConfig } from "./exportvectorenrichmentjoboutputconfig";
import { VectorEnrichmentJobExportStatusEnum } from "./vectorenrichmentjobexportstatusenum";
/**
 * Success
 */
export declare class ExportVectorEnrichmentJobOutput extends SpeakeasyBase {
    arn: string;
    creationTime: Date;
    executionRoleArn: string;
    exportStatus: VectorEnrichmentJobExportStatusEnum;
    outputConfig: ExportVectorEnrichmentJobOutputConfig;
}

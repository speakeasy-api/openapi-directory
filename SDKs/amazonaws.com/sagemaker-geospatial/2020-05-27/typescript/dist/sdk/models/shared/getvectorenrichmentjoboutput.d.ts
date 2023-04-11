import { SpeakeasyBase } from "../../../internal/utils";
import { VectorEnrichmentJobConfig } from "./vectorenrichmentjobconfig";
import { VectorEnrichmentJobErrorDetails } from "./vectorenrichmentjoberrordetails";
import { VectorEnrichmentJobExportErrorDetails } from "./vectorenrichmentjobexporterrordetails";
import { VectorEnrichmentJobExportStatusEnum } from "./vectorenrichmentjobexportstatusenum";
import { VectorEnrichmentJobInputConfig } from "./vectorenrichmentjobinputconfig";
import { VectorEnrichmentJobStatusEnum } from "./vectorenrichmentjobstatusenum";
import { VectorEnrichmentJobTypeEnum } from "./vectorenrichmentjobtypeenum";
/**
 * Success
 */
export declare class GetVectorEnrichmentJobOutput extends SpeakeasyBase {
    arn: string;
    creationTime: Date;
    durationInSeconds: number;
    errorDetails?: VectorEnrichmentJobErrorDetails;
    executionRoleArn: string;
    exportErrorDetails?: VectorEnrichmentJobExportErrorDetails;
    exportStatus?: VectorEnrichmentJobExportStatusEnum;
    inputConfig: VectorEnrichmentJobInputConfig;
    jobConfig: VectorEnrichmentJobConfig;
    kmsKeyId?: string;
    name: string;
    status: VectorEnrichmentJobStatusEnum;
    tags?: Record<string, string>;
    type: VectorEnrichmentJobTypeEnum;
}

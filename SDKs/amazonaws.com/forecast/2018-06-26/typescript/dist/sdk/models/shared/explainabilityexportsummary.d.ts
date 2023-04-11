import { SpeakeasyBase } from "../../../internal/utils";
import { DataDestination } from "./datadestination";
/**
 * Provides a summary of the Explainability export properties used in the <a>ListExplainabilityExports</a> operation. To get a complete set of properties, call the <a>DescribeExplainabilityExport</a> operation, and provide the <code>ExplainabilityExportArn</code>.
 */
export declare class ExplainabilityExportSummary extends SpeakeasyBase {
    creationTime?: Date;
    /**
     * The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the location, and an Key Management Service (KMS) key (optional).
     */
    destination?: DataDestination;
    explainabilityExportArn?: string;
    explainabilityExportName?: string;
    lastModificationTime?: Date;
    message?: string;
    status?: string;
}

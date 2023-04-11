import { SpeakeasyBase } from "../../../internal/utils";
import { AdditionalArtifactEnum } from "./additionalartifactenum";
import { AWSRegionEnum } from "./awsregionenum";
import { CompressionFormatEnum } from "./compressionformatenum";
import { ReportFormatEnum } from "./reportformatenum";
import { ReportVersioningEnum } from "./reportversioningenum";
import { SchemaElementEnum } from "./schemaelementenum";
import { TimeUnitEnum } from "./timeunitenum";
/**
 * The definition of AWS Cost and Usage Report. You can specify the report name, time unit, report format, compression format, S3 bucket, additional artifacts, and schema elements in the definition.
 */
export declare class ReportDefinition extends SpeakeasyBase {
    additionalArtifacts?: AdditionalArtifactEnum[];
    additionalSchemaElements: SchemaElementEnum[];
    billingViewArn?: string;
    /**
     * The compression format that AWS uses for the report.
     */
    compression: CompressionFormatEnum;
    /**
     * The format that AWS saves the report in.
     */
    format: ReportFormatEnum;
    refreshClosedReports?: boolean;
    /**
     * The name of the report that you want to create. The name must be unique, is case sensitive, and can't include spaces.
     */
    reportName: string;
    reportVersioning?: ReportVersioningEnum;
    /**
     * The S3 bucket where AWS delivers the report.
     */
    s3Bucket: string;
    /**
     * The prefix that AWS adds to the report name when AWS delivers the report. Your prefix can't include spaces.
     */
    s3Prefix: string;
    /**
     * The region of the S3 bucket that AWS delivers the report into.
     */
    s3Region: AWSRegionEnum;
    /**
     * The length of time covered by the report.
     */
    timeUnit: TimeUnitEnum;
}

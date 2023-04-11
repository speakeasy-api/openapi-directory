import { SpeakeasyBase } from "../../../internal/utils";
import { FormatEnum } from "./formatenum";
import { ReportFrequencyEnum } from "./reportfrequencyenum";
import { S3Location } from "./s3location";
/**
 * The configuration of a report in AWS Application Cost Profiler.
 */
export declare class ReportDefinition extends SpeakeasyBase {
    createdAt?: Date;
    destinationS3Location?: S3Location;
    format?: FormatEnum;
    lastUpdatedAt?: Date;
    reportDescription?: string;
    reportFrequency?: ReportFrequencyEnum;
    reportId?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { FormatEnum } from "./formatenum";
import { ReportFrequencyEnum } from "./reportfrequencyenum";
import { S3Location } from "./s3location";
/**
 * Success
 */
export declare class GetReportDefinitionResult extends SpeakeasyBase {
    createdAt: Date;
    destinationS3Location: S3Location;
    format: FormatEnum;
    lastUpdated: Date;
    reportDescription: string;
    reportFrequency: ReportFrequencyEnum;
    reportId: string;
}

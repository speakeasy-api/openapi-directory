import { SpeakeasyBase } from "../../../internal/utils";
import { DataSource } from "./datasource";
import { ImportModeEnum } from "./importmodeenum";
import { Statistics } from "./statistics";
/**
 * Success
 */
export declare class DescribeDatasetImportJobResponse extends SpeakeasyBase {
    creationTime?: Date;
    dataSize?: number;
    dataSource?: DataSource;
    datasetArn?: string;
    datasetImportJobArn?: string;
    datasetImportJobName?: string;
    estimatedTimeRemainingInMinutes?: number;
    fieldStatistics?: Record<string, Statistics>;
    format?: string;
    geolocationFormat?: string;
    importMode?: ImportModeEnum;
    lastModificationTime?: Date;
    message?: string;
    status?: string;
    timeZone?: string;
    timestampFormat?: string;
    useGeolocationForTimeZone?: boolean;
}

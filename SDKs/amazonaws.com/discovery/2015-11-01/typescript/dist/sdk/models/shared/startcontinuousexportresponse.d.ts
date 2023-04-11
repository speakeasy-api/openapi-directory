import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceEnum } from "./datasourceenum";
/**
 * Success
 */
export declare class StartContinuousExportResponse extends SpeakeasyBase {
    dataSource?: DataSourceEnum;
    exportId?: string;
    s3Bucket?: string;
    schemaStorageConfig?: Record<string, string>;
    startTime?: Date;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { ContinuousExportStatusEnum } from "./continuousexportstatusenum";
import { DataSourceEnum } from "./datasourceenum";
/**
 * A list of continuous export descriptions.
 */
export declare class ContinuousExportDescription extends SpeakeasyBase {
    dataSource?: DataSourceEnum;
    exportId?: string;
    s3Bucket?: string;
    schemaStorageConfig?: Record<string, string>;
    startTime?: Date;
    status?: ContinuousExportStatusEnum;
    statusDetail?: string;
    stopTime?: Date;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { DataSource } from "./datasource";
import { ImportModeEnum } from "./importmodeenum";
import { Tag } from "./tag";
export declare class CreateDatasetImportJobRequest extends SpeakeasyBase {
    dataSource: DataSource;
    datasetArn: string;
    importMode?: ImportModeEnum;
    jobName: string;
    publishAttributionMetricsToS3?: boolean;
    roleArn: string;
    tags?: Tag[];
}

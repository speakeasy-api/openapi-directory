import { SpeakeasyBase } from "../../../internal/utils";
import { DataSource } from "./datasource";
import { ImportModeEnum } from "./importmodeenum";
import { Tag } from "./tag";
export declare class CreateDatasetImportJobRequest extends SpeakeasyBase {
    dataSource: DataSource;
    datasetArn: string;
    datasetImportJobName: string;
    format?: string;
    geolocationFormat?: string;
    importMode?: ImportModeEnum;
    tags?: Tag[];
    timeZone?: string;
    timestampFormat?: string;
    useGeolocationForTimeZone?: boolean;
}

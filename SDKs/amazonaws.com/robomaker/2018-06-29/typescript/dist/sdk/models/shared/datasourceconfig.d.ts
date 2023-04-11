import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceTypeEnum } from "./datasourcetypeenum";
/**
 * Information about a data source.
 */
export declare class DataSourceConfig extends SpeakeasyBase {
    destination?: string;
    name: string;
    s3Bucket: string;
    s3Keys: string[];
    type?: DataSourceTypeEnum;
}

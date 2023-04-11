import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceTypeEnum } from "./datasourcetypeenum";
import { S3KeyOutput } from "./s3keyoutput";
/**
 * Information about a data source.
 */
export declare class DataSource extends SpeakeasyBase {
    destination?: string;
    name?: string;
    s3Bucket?: string;
    s3Keys?: S3KeyOutput[];
    type?: DataSourceTypeEnum;
}

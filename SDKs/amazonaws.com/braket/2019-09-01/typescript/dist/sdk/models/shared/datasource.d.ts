import { SpeakeasyBase } from "../../../internal/utils";
import { S3DataSource } from "./s3datasource";
/**
 * Information about the source of the data used by the Amazon Braket job.
 */
export declare class DataSource extends SpeakeasyBase {
    s3DataSource: S3DataSource;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { S3Config } from "./s3config";
/**
 * The source of your data, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the data and, optionally, an Key Management Service (KMS) key.
 */
export declare class DataSource extends SpeakeasyBase {
    s3Config: S3Config;
}

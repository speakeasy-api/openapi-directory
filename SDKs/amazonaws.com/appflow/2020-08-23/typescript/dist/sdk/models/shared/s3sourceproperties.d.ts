import { SpeakeasyBase } from "../../../internal/utils";
import { S3InputFormatConfig } from "./s3inputformatconfig";
/**
 *  The properties that are applied when Amazon S3 is being used as the flow source.
 */
export declare class S3SourceProperties extends SpeakeasyBase {
    bucketName: string;
    bucketPrefix?: string;
    /**
     *  When you use Amazon S3 as the source, the configuration format that you provide the flow input data.
     */
    s3InputFormatConfig?: S3InputFormatConfig;
}

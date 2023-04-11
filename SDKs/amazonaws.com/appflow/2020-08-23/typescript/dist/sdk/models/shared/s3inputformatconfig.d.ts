import { SpeakeasyBase } from "../../../internal/utils";
import { S3InputFileTypeEnum } from "./s3inputfiletypeenum";
/**
 *  When you use Amazon S3 as the source, the configuration format that you provide the flow input data.
 */
export declare class S3InputFormatConfig extends SpeakeasyBase {
    s3InputFileType?: S3InputFileTypeEnum;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { GlueSchema } from "./glueschema";
import { ParquetCompressionTypeEnum } from "./parquetcompressiontypeenum";
import { S3DirectSourceAdditionalOptions } from "./s3directsourceadditionaloptions";
/**
 * Specifies an Apache Parquet data store stored in Amazon S3.
 */
export declare class S3ParquetSource extends SpeakeasyBase {
    additionalOptions?: S3DirectSourceAdditionalOptions;
    compressionType?: ParquetCompressionTypeEnum;
    exclusions?: string[];
    groupFiles?: string;
    groupSize?: string;
    maxBand?: number;
    maxFilesInBand?: number;
    name: string;
    outputSchemas?: GlueSchema[];
    paths: string[];
    recurse?: boolean;
}

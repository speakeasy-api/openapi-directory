import { SpeakeasyBase } from "../../../internal/utils";
import { DirectSchemaChangePolicy } from "./directschemachangepolicy";
import { ParquetCompressionTypeEnum } from "./parquetcompressiontypeenum";
/**
 * Specifies a data target that writes to Amazon S3 in Apache Parquet columnar storage.
 */
export declare class S3GlueParquetTarget extends SpeakeasyBase {
    compression?: ParquetCompressionTypeEnum;
    inputs: string[];
    name: string;
    partitionKeys?: string[][];
    path: string;
    schemaChangePolicy?: DirectSchemaChangePolicy;
}

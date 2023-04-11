import { SpeakeasyBase } from "../../../internal/utils";
import { CompressionTypeEnum } from "./compressiontypeenum";
import { GlueSchema } from "./glueschema";
import { QuoteCharEnum } from "./quotecharenum";
import { S3DirectSourceAdditionalOptions } from "./s3directsourceadditionaloptions";
import { SeparatorEnum } from "./separatorenum";
/**
 * Specifies a command-separated value (CSV) data store stored in Amazon S3.
 */
export declare class S3CsvSource extends SpeakeasyBase {
    additionalOptions?: S3DirectSourceAdditionalOptions;
    compressionType?: CompressionTypeEnum;
    escaper?: string;
    exclusions?: string[];
    groupFiles?: string;
    groupSize?: string;
    maxBand?: number;
    maxFilesInBand?: number;
    multiline?: boolean;
    name: string;
    optimizePerformance?: boolean;
    outputSchemas?: GlueSchema[];
    paths: string[];
    quoteChar: QuoteCharEnum;
    recurse?: boolean;
    separator: SeparatorEnum;
    skipFirst?: boolean;
    withHeader?: boolean;
    writeHeader?: boolean;
}

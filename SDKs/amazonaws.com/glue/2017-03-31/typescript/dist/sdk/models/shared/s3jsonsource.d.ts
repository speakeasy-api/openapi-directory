import { SpeakeasyBase } from "../../../internal/utils";
import { CompressionTypeEnum } from "./compressiontypeenum";
import { GlueSchema } from "./glueschema";
import { S3DirectSourceAdditionalOptions } from "./s3directsourceadditionaloptions";
/**
 * Specifies a JSON data store stored in Amazon S3.
 */
export declare class S3JsonSource extends SpeakeasyBase {
    additionalOptions?: S3DirectSourceAdditionalOptions;
    compressionType?: CompressionTypeEnum;
    exclusions?: string[];
    groupFiles?: string;
    groupSize?: string;
    jsonPath?: string;
    maxBand?: number;
    maxFilesInBand?: number;
    multiline?: boolean;
    name: string;
    outputSchemas?: GlueSchema[];
    paths: string[];
    recurse?: boolean;
}

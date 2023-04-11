import { SpeakeasyBase } from "../../../internal/utils";
import { DirectSchemaChangePolicy } from "./directschemachangepolicy";
import { TargetFormatEnum } from "./targetformatenum";
/**
 * Specifies a data target that writes to Amazon S3.
 */
export declare class S3DirectTarget extends SpeakeasyBase {
    compression?: string;
    format: TargetFormatEnum;
    inputs: string[];
    name: string;
    partitionKeys?: string[][];
    path: string;
    schemaChangePolicy?: DirectSchemaChangePolicy;
}

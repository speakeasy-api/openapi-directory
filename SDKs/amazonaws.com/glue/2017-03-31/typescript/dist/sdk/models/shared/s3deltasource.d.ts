import { SpeakeasyBase } from "../../../internal/utils";
import { GlueSchema } from "./glueschema";
import { S3DirectSourceAdditionalOptions } from "./s3directsourceadditionaloptions";
/**
 * Specifies a Delta Lake data source stored in Amazon S3.
 */
export declare class S3DeltaSource extends SpeakeasyBase {
    additionalDeltaOptions?: Record<string, string>;
    additionalOptions?: S3DirectSourceAdditionalOptions;
    name: string;
    outputSchemas?: GlueSchema[];
    paths: string[];
}

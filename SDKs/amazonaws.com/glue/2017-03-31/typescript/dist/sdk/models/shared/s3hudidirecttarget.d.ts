import { SpeakeasyBase } from "../../../internal/utils";
import { DirectSchemaChangePolicy } from "./directschemachangepolicy";
import { HudiTargetCompressionTypeEnum } from "./huditargetcompressiontypeenum";
import { TargetFormatEnum } from "./targetformatenum";
/**
 * Specifies a target that writes to a Hudi data source in Amazon S3.
 */
export declare class S3HudiDirectTarget extends SpeakeasyBase {
    additionalOptions: Record<string, string>;
    compression: HudiTargetCompressionTypeEnum;
    format: TargetFormatEnum;
    inputs: string[];
    name: string;
    partitionKeys?: string[][];
    path: string;
    schemaChangePolicy?: DirectSchemaChangePolicy;
}

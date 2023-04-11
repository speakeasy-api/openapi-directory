import { SpeakeasyBase } from "../../../internal/utils";
import { DeltaTargetCompressionTypeEnum } from "./deltatargetcompressiontypeenum";
import { DirectSchemaChangePolicy } from "./directschemachangepolicy";
import { TargetFormatEnum } from "./targetformatenum";
/**
 * Specifies a target that writes to a Delta Lake data source in Amazon S3.
 */
export declare class S3DeltaDirectTarget extends SpeakeasyBase {
    additionalOptions?: Record<string, string>;
    compression: DeltaTargetCompressionTypeEnum;
    format: TargetFormatEnum;
    inputs: string[];
    name: string;
    partitionKeys?: string[][];
    path: string;
    schemaChangePolicy?: DirectSchemaChangePolicy;
}

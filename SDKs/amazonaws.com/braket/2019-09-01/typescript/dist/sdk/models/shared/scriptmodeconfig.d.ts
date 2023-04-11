import { SpeakeasyBase } from "../../../internal/utils";
import { CompressionTypeEnum } from "./compressiontypeenum";
/**
 * Contains information about the Python scripts used for entry and by an Amazon Braket job.
 */
export declare class ScriptModeConfig extends SpeakeasyBase {
    compressionType?: CompressionTypeEnum;
    entryPoint: string;
    s3Uri: string;
}

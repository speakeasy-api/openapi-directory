import { SpeakeasyBase } from "../../../internal/utils";
import { CompressionTypeEnum } from "./compressiontypeenum";
import { SplitTypeEnum } from "./splittypeenum";
import { TransformDataSource } from "./transformdatasource";
/**
 * Describes the input source of a transform job and the way the transform job consumes it.
 */
export declare class TransformInput extends SpeakeasyBase {
    compressionType?: CompressionTypeEnum;
    contentType?: string;
    dataSource: TransformDataSource;
    splitType?: SplitTypeEnum;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { BuildBatch } from "./buildbatch";
/**
 * Success
 */
export declare class BatchGetBuildBatchesOutput extends SpeakeasyBase {
    buildBatches?: BuildBatch[];
    buildBatchesNotFound?: string[];
}

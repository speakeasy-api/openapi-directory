import { SpeakeasyBase } from "../../../internal/utils";
import { OptimizerTypeEnum } from "./optimizertypeenum";
/**
 * A structure describing the configuration and details of a storage optimizer.
 */
export declare class StorageOptimizer extends SpeakeasyBase {
    config?: Record<string, string>;
    errorMessage?: string;
    lastRunDetails?: string;
    storageOptimizerType?: OptimizerTypeEnum;
    warnings?: string;
}

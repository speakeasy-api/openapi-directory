import { SpeakeasyBase } from "../../../internal/utils";
import { ExecutorStateEnum } from "./executorstateenum";
import { ExecutorTypeEnum } from "./executortypeenum";
/**
 * Contains summary information about an executor.
 */
export declare class ExecutorsSummary extends SpeakeasyBase {
    executorId: string;
    executorSize?: number;
    executorState?: ExecutorStateEnum;
    executorType?: ExecutorTypeEnum;
    startDateTime?: number;
    terminationDateTime?: number;
}

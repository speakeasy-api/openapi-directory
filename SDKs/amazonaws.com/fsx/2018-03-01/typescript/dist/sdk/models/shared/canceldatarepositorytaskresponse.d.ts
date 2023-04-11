import { SpeakeasyBase } from "../../../internal/utils";
import { DataRepositoryTaskLifecycleEnum } from "./datarepositorytasklifecycleenum";
/**
 * Success
 */
export declare class CancelDataRepositoryTaskResponse extends SpeakeasyBase {
    lifecycle?: DataRepositoryTaskLifecycleEnum;
    taskId?: string;
}

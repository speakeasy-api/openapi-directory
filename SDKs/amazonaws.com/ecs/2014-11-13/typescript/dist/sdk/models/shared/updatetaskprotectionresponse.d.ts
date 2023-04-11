import { SpeakeasyBase } from "../../../internal/utils";
import { Failure } from "./failure";
import { ProtectedTask } from "./protectedtask";
/**
 * Success
 */
export declare class UpdateTaskProtectionResponse extends SpeakeasyBase {
    failures?: Failure[];
    protectedTasks?: ProtectedTask[];
}

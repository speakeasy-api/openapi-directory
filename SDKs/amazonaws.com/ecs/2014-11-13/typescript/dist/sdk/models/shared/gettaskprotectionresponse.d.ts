import { SpeakeasyBase } from "../../../internal/utils";
import { Failure } from "./failure";
import { ProtectedTask } from "./protectedtask";
/**
 * Success
 */
export declare class GetTaskProtectionResponse extends SpeakeasyBase {
    failures?: Failure[];
    protectedTasks?: ProtectedTask[];
}

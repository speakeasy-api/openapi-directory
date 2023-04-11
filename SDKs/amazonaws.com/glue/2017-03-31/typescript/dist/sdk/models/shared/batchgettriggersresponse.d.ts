import { SpeakeasyBase } from "../../../internal/utils";
import { Trigger } from "./trigger";
/**
 * Success
 */
export declare class BatchGetTriggersResponse extends SpeakeasyBase {
    triggers?: Trigger[];
    triggersNotFound?: string[];
}

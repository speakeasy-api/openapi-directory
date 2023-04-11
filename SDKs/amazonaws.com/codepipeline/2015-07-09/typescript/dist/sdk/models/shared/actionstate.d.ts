import { SpeakeasyBase } from "../../../internal/utils";
import { ActionExecution } from "./actionexecution";
import { ActionRevision } from "./actionrevision";
/**
 * Represents information about the state of an action.
 */
export declare class ActionState extends SpeakeasyBase {
    actionName?: string;
    currentRevision?: ActionRevision;
    entityUrl?: string;
    latestExecution?: ActionExecution;
    revisionUrl?: string;
}

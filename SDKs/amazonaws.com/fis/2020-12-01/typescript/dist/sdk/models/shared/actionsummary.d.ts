import { SpeakeasyBase } from "../../../internal/utils";
import { ActionTarget } from "./actiontarget";
/**
 * Provides a summary of an action.
**/
export declare class ActionSummary extends SpeakeasyBase {
    description?: string;
    id?: string;
    tags?: Record<string, string>;
    targets?: Record<string, ActionTarget>;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { UpdateActionList } from "./updateactionlist";
/**
 * Success
 */
export declare class UpdateActionsMessage extends SpeakeasyBase {
    marker?: string;
    updateActions?: UpdateActionList[];
}

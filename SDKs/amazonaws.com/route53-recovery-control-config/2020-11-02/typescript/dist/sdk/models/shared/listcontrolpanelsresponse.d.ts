import { SpeakeasyBase } from "../../../internal/utils";
import { ControlPanel } from "./controlpanel";
/**
 * Success
 */
export declare class ListControlPanelsResponse extends SpeakeasyBase {
    controlPanels?: ControlPanel[];
    nextToken?: string;
}

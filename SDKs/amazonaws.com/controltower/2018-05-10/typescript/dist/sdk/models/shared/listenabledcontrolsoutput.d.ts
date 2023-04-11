import { SpeakeasyBase } from "../../../internal/utils";
import { EnabledControlSummary } from "./enabledcontrolsummary";
/**
 * Success
 */
export declare class ListEnabledControlsOutput extends SpeakeasyBase {
    enabledControls: EnabledControlSummary[];
    nextToken?: string;
}

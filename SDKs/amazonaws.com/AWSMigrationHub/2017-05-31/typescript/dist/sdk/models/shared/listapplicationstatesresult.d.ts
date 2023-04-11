import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationState } from "./applicationstate";
/**
 * Success
 */
export declare class ListApplicationStatesResult extends SpeakeasyBase {
    applicationStateList?: ApplicationState[];
    nextToken?: string;
}

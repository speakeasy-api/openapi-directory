import { SpeakeasyBase } from "../../../internal/utils";
import { Command } from "./command";
/**
 * Success
 */
export declare class ListCommandsResult extends SpeakeasyBase {
    commands?: Command[];
    nextToken?: string;
}

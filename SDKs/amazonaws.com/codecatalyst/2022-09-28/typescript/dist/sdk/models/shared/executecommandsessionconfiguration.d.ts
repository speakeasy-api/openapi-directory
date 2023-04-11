import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the commands that will be run on a Dev Environment when an SSH session begins.
 */
export declare class ExecuteCommandSessionConfiguration extends SpeakeasyBase {
    arguments?: string[];
    command: string;
}

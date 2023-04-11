import { SpeakeasyBase } from "../../../internal/utils";
import { Build } from "./build";
/**
 * Success
 */
export declare class ListBuildsOutput extends SpeakeasyBase {
    builds?: Build[];
    nextToken?: string;
}

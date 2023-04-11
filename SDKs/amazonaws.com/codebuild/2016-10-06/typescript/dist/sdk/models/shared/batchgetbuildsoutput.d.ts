import { SpeakeasyBase } from "../../../internal/utils";
import { Build } from "./build";
/**
 * Success
 */
export declare class BatchGetBuildsOutput extends SpeakeasyBase {
    builds?: Build[];
    buildsNotFound?: string[];
}

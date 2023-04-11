import { SpeakeasyBase } from "../../../internal/utils";
import { SceneSummary } from "./scenesummary";
/**
 * Success
 */
export declare class ListScenesResponse extends SpeakeasyBase {
    nextToken?: string;
    sceneSummaries?: SceneSummary[];
}

import { SpeakeasyBase } from "../../../internal/utils";
import { WorldSummary } from "./worldsummary";
/**
 * Success
 */
export declare class ListWorldsResponse extends SpeakeasyBase {
    nextToken?: string;
    worldSummaries?: WorldSummary[];
}

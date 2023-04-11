import { SpeakeasyBase } from "../../../internal/utils";
import { Insight } from "./insight";
/**
 * Success
 */
export declare class GetInsightsResponse extends SpeakeasyBase {
    insights: Insight[];
    nextToken?: string;
}

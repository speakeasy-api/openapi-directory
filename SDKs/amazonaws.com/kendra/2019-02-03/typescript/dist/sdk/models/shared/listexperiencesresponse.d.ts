import { SpeakeasyBase } from "../../../internal/utils";
import { ExperiencesSummary } from "./experiencessummary";
/**
 * Success
 */
export declare class ListExperiencesResponse extends SpeakeasyBase {
    nextToken?: string;
    summaryItems?: ExperiencesSummary[];
}

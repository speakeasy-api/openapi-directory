import { SpeakeasyBase } from "../../../internal/utils";
import { ExperienceEntitiesSummary } from "./experienceentitiessummary";
/**
 * Success
 */
export declare class ListExperienceEntitiesResponse extends SpeakeasyBase {
    nextToken?: string;
    summaryItems?: ExperienceEntitiesSummary[];
}

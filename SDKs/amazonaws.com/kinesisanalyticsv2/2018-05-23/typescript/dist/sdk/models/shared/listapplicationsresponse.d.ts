import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationSummary } from "./applicationsummary";
/**
 * Success
 */
export declare class ListApplicationsResponse extends SpeakeasyBase {
    applicationSummaries: ApplicationSummary[];
    nextToken?: string;
}

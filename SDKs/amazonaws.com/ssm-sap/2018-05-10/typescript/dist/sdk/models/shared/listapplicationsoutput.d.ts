import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationSummary } from "./applicationsummary";
/**
 * Success
 */
export declare class ListApplicationsOutput extends SpeakeasyBase {
    applications?: ApplicationSummary[];
    nextToken?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { OrganizationSummary } from "./organizationsummary";
/**
 * Success
 */
export declare class ListOrganizationsResponse extends SpeakeasyBase {
    nextToken?: string;
    organizationSummaries?: OrganizationSummary[];
}

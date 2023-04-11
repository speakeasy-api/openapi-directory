import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceSummary } from "./servicesummary";
/**
 * Success
 */
export declare class ListServicesResponse extends SpeakeasyBase {
    nextToken?: string;
    serviceSummaryList: ServiceSummary[];
}

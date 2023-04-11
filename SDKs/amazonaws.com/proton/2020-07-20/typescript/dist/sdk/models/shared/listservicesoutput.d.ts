import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceSummary } from "./servicesummary";
/**
 * Success
 */
export declare class ListServicesOutput extends SpeakeasyBase {
    nextToken?: string;
    services: ServiceSummary[];
}

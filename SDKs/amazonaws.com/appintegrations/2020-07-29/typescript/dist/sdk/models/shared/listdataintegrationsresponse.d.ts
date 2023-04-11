import { SpeakeasyBase } from "../../../internal/utils";
import { DataIntegrationSummary } from "./dataintegrationsummary";
/**
 * Success
 */
export declare class ListDataIntegrationsResponse extends SpeakeasyBase {
    dataIntegrations?: DataIntegrationSummary[];
    nextToken?: string;
}

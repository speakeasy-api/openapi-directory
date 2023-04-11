import { SpeakeasyBase } from "../../../internal/utils";
import { EventIntegration } from "./eventintegration";
/**
 * Success
 */
export declare class ListEventIntegrationsResponse extends SpeakeasyBase {
    eventIntegrations?: EventIntegration[];
    nextToken?: string;
}

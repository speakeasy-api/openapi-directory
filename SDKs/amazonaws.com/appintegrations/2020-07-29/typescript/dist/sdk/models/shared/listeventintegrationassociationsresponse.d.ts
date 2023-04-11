import { SpeakeasyBase } from "../../../internal/utils";
import { EventIntegrationAssociation } from "./eventintegrationassociation";
/**
 * Success
 */
export declare class ListEventIntegrationAssociationsResponse extends SpeakeasyBase {
    eventIntegrationAssociations?: EventIntegrationAssociation[];
    nextToken?: string;
}

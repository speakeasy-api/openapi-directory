import { SpeakeasyBase } from "../../../internal/utils";
import { DataIntegrationAssociationSummary } from "./dataintegrationassociationsummary";
/**
 * Success
 */
export declare class ListDataIntegrationAssociationsResponse extends SpeakeasyBase {
    dataIntegrationAssociations?: DataIntegrationAssociationSummary[];
    nextToken?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { StandardsControlAssociationSummary } from "./standardscontrolassociationsummary";
/**
 * Success
 */
export declare class ListStandardsControlAssociationsResponse extends SpeakeasyBase {
    nextToken?: string;
    standardsControlAssociationSummaries: StandardsControlAssociationSummary[];
}

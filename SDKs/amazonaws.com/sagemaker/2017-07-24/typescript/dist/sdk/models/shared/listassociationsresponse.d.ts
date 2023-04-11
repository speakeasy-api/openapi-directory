import { SpeakeasyBase } from "../../../internal/utils";
import { AssociationSummary } from "./associationsummary";
/**
 * Success
 */
export declare class ListAssociationsResponse extends SpeakeasyBase {
    associationSummaries?: AssociationSummary[];
    nextToken?: string;
}

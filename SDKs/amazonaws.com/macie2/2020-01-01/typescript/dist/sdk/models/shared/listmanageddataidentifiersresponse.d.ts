import { SpeakeasyBase } from "../../../internal/utils";
import { ManagedDataIdentifierSummary } from "./manageddataidentifiersummary";
/**
 * Success
 */
export declare class ListManagedDataIdentifiersResponse extends SpeakeasyBase {
    items?: ManagedDataIdentifierSummary[];
    nextToken?: string;
}

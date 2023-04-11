import { SpeakeasyBase } from "../../../internal/utils";
import { ProtectedQuerySummary } from "./protectedquerysummary";
/**
 * Success
 */
export declare class ListProtectedQueriesOutput extends SpeakeasyBase {
    nextToken?: string;
    protectedQueries: ProtectedQuerySummary[];
}

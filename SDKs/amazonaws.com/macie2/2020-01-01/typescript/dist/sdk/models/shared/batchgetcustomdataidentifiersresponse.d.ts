import { SpeakeasyBase } from "../../../internal/utils";
import { BatchGetCustomDataIdentifierSummary } from "./batchgetcustomdataidentifiersummary";
/**
 * Success
 */
export declare class BatchGetCustomDataIdentifiersResponse extends SpeakeasyBase {
    customDataIdentifiers?: BatchGetCustomDataIdentifierSummary[];
    notFoundIdentifierIds?: string[];
}

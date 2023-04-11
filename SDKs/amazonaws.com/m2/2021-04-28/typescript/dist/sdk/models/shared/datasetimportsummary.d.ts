import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a summary of data set imports.
 */
export declare class DataSetImportSummary extends SpeakeasyBase {
    failed: number;
    inProgress: number;
    pending: number;
    succeeded: number;
    total: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { FileBatchJobIdentifier } from "./filebatchjobidentifier";
import { ScriptBatchJobIdentifier } from "./scriptbatchjobidentifier";
/**
 * Identifies a specific batch job.
 */
export declare class BatchJobIdentifier extends SpeakeasyBase {
    fileBatchJobIdentifier?: FileBatchJobIdentifier;
    scriptBatchJobIdentifier?: ScriptBatchJobIdentifier;
}

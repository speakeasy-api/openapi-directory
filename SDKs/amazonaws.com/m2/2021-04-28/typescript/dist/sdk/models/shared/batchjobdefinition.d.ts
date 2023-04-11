import { SpeakeasyBase } from "../../../internal/utils";
import { FileBatchJobDefinition } from "./filebatchjobdefinition";
import { ScriptBatchJobDefinition } from "./scriptbatchjobdefinition";
/**
 * Defines the details of a batch job.
 */
export declare class BatchJobDefinition extends SpeakeasyBase {
    fileBatchJobDefinition?: FileBatchJobDefinition;
    scriptBatchJobDefinition?: ScriptBatchJobDefinition;
}

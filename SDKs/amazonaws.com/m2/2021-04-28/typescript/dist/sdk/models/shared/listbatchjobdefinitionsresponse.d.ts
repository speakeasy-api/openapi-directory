import { SpeakeasyBase } from "../../../internal/utils";
import { BatchJobDefinition } from "./batchjobdefinition";
/**
 * Success
 */
export declare class ListBatchJobDefinitionsResponse extends SpeakeasyBase {
    batchJobDefinitions: BatchJobDefinition[];
    nextToken?: string;
}

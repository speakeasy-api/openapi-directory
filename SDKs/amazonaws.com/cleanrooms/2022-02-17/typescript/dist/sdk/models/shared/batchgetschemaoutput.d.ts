import { SpeakeasyBase } from "../../../internal/utils";
import { BatchGetSchemaError } from "./batchgetschemaerror";
import { Schema } from "./schema";
/**
 * Success
 */
export declare class BatchGetSchemaOutput extends SpeakeasyBase {
    errors: BatchGetSchemaError[];
    schemas: Schema[];
}

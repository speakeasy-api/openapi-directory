import { SpeakeasyBase } from "../../../internal/utils";
import { GlueStudioSchemaColumn } from "./gluestudioschemacolumn";
/**
 * Specifies a user-defined schema when a schema cannot be determined by Glue.
 */
export declare class GlueSchema extends SpeakeasyBase {
    columns?: GlueStudioSchemaColumn[];
}

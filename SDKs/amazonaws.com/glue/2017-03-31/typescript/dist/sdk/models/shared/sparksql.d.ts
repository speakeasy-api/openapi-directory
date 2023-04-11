import { SpeakeasyBase } from "../../../internal/utils";
import { GlueSchema } from "./glueschema";
import { SqlAlias } from "./sqlalias";
/**
 * Specifies a transform where you enter a SQL query using Spark SQL syntax to transform the data. The output is a single <code>DynamicFrame</code>.
 */
export declare class SparkSQL extends SpeakeasyBase {
    inputs: string[];
    name: string;
    outputSchemas?: GlueSchema[];
    sqlAliases: SqlAlias[];
    sqlQuery: string;
}

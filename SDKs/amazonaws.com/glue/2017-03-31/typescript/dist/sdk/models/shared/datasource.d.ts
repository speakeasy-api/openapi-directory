import { SpeakeasyBase } from "../../../internal/utils";
import { GlueTable } from "./gluetable";
/**
 * A data source (an Glue table) for which you want data quality results.
 */
export declare class DataSource extends SpeakeasyBase {
    glueTable: GlueTable;
}

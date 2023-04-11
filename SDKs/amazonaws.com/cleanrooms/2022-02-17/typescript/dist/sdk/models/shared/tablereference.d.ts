import { SpeakeasyBase } from "../../../internal/utils";
import { GlueTableReference } from "./gluetablereference";
/**
 * A pointer to the dataset that underlies this table. Currently, this can only be an AWS Glue table.
 */
export declare class TableReference extends SpeakeasyBase {
    glue?: GlueTableReference;
}

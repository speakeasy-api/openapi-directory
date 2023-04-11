import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A column within a schema relation, derived from the underlying AWS Glue table.
 */
export declare class Column extends SpeakeasyBase {
    name: string;
    type: string;
}

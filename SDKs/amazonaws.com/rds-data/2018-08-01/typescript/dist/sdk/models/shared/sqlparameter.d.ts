import { SpeakeasyBase } from "../../../internal/utils";
import { Field } from "./field";
import { TypeHintEnum } from "./typehintenum";
/**
 * A parameter used in a SQL statement.
 */
export declare class SqlParameter extends SpeakeasyBase {
    name?: string;
    typeHint?: TypeHintEnum;
    value?: Field;
}

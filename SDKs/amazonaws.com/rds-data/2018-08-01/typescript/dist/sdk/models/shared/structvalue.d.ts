import { SpeakeasyBase } from "../../../internal/utils";
import { Value } from "./value";
/**
 * <p>A structure value returned by a call.</p> <note> <p>This data structure is only used with the deprecated <code>ExecuteSql</code> operation. Use the <code>BatchExecuteStatement</code> or <code>ExecuteStatement</code> operation instead.</p> </note>
 */
export declare class StructValue extends SpeakeasyBase {
    attributes?: Value[];
}

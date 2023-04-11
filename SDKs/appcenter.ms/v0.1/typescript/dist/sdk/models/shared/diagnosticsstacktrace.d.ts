import { SpeakeasyBase } from "../../../internal/utils";
import { DiagnosticsException } from "./diagnosticsexception";
import { DiagnosticsThread } from "./diagnosticsthread";
/**
 * a stacktrace in a processed and prettyfied way
 */
export declare class DiagnosticsStackTrace extends SpeakeasyBase {
    /**
     * a exception
     */
    exception?: DiagnosticsException;
    reason?: string;
    threads?: DiagnosticsThread[];
    title?: string;
}

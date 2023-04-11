import { SpeakeasyBase } from "../../../internal/utils";
import { Exception } from "./exception";
import { Thread } from "./thread";
/**
 * a stacktrace in a processed and prettyfied way
 */
export declare class Stacktrace extends SpeakeasyBase {
    /**
     * a exception
     */
    exception?: Exception;
    reason?: string;
    threads?: Thread[];
    title?: string;
}

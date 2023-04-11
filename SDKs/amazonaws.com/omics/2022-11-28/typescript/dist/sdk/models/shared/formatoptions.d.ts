import { SpeakeasyBase } from "../../../internal/utils";
import { TsvOptions } from "./tsvoptions";
import { VcfOptions } from "./vcfoptions";
/**
 * Formatting options for a file.
 */
export declare class FormatOptions extends SpeakeasyBase {
    tsvOptions?: TsvOptions;
    vcfOptions?: VcfOptions;
}

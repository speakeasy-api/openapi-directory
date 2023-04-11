import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Used to error if input validation fails.
 */
export declare class ValueError extends SpeakeasyBase {
    fields?: Record<string, any>;
    text?: string;
}

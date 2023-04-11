import { SpeakeasyBase } from "../../../internal/utils";
import { StandardsManagedBy } from "./standardsmanagedby";
/**
 * Provides information about a specific security standard.
 */
export declare class Standard extends SpeakeasyBase {
    description?: string;
    enabledByDefault?: boolean;
    name?: string;
    standardsArn?: string;
    standardsManagedBy?: StandardsManagedBy;
}

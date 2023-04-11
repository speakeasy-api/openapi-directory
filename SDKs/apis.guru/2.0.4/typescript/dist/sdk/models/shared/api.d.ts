import { SpeakeasyBase } from "../../../internal/utils";
import { ApiVersion } from "./apiversion";
/**
 * Meta information about API
 */
export declare class Api extends SpeakeasyBase {
    /**
     * Timestamp when the API was first added to the directory
     */
    added: Date;
    /**
     * Recommended version
     */
    preferred: string;
    /**
     * List of supported versions of the API
     */
    versions: Record<string, ApiVersion>;
}

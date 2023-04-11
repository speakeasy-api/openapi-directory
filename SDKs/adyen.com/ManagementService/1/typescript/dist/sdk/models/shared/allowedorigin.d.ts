import { SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
/**
 * OK - the request has succeeded.
 */
export declare class AllowedOrigin extends SpeakeasyBase {
    links?: Links;
    /**
     * Domain of the allowed origin.
     */
    domain: string;
    /**
     * Unique identifier of the allowed origin.
     */
    id?: string;
}

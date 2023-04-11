import { SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
export declare class CreateAllowedOriginRequest extends SpeakeasyBase {
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

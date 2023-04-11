import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A host header identifies a web domain.
 */
export declare class HostHeader extends SpeakeasyBase {
    /**
     * Indicates if the host header is applied on the web server.
     */
    enabled?: boolean;
    /**
     * The name of the host header.
     */
    name?: string;
}

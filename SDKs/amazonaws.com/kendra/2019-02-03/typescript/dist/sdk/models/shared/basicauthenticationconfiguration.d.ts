import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides the configuration information to connect to websites that require basic user authentication.
 */
export declare class BasicAuthenticationConfiguration extends SpeakeasyBase {
    credentials: string;
    host: string;
    port: number;
}

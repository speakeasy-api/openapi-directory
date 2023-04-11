import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The custom credentials required for custom authentication.
 */
export declare class CustomAuthCredentials extends SpeakeasyBase {
    credentialsMap?: Record<string, string>;
    customAuthenticationType: string;
}

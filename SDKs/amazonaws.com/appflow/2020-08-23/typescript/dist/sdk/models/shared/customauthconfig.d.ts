import { SpeakeasyBase } from "../../../internal/utils";
import { AuthParameter } from "./authparameter";
/**
 * Configuration information required for custom authentication.
 */
export declare class CustomAuthConfig extends SpeakeasyBase {
    authParameters?: AuthParameter[];
    customAuthenticationType?: string;
}

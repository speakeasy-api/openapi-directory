import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful DELETE on AuthProvider resource
 */
export declare class AuthProvider extends SpeakeasyBase {
    id: number;
    /**
     * Name to differentiate the authentication type
     */
    name: string;
    /**
     * Authentication type to use when pushing the webhook
     */
    type: string;
}

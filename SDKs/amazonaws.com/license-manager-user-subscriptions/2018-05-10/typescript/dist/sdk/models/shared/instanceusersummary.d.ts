import { SpeakeasyBase } from "../../../internal/utils";
import { IdentityProvider } from "./identityprovider";
/**
 * Describes users of an EC2 instance providing user-based subscriptions.
 */
export declare class InstanceUserSummary extends SpeakeasyBase {
    associationDate?: string;
    disassociationDate?: string;
    domain?: string;
    identityProvider: IdentityProvider;
    instanceId: string;
    status: string;
    statusMessage?: string;
    username: string;
}

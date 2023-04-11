import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a request to delete a sending authorization policy for an identity. Sending authorization is an Amazon SES feature that enables you to authorize other senders to use your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.
 */
export declare class DeleteIdentityPolicyRequest extends SpeakeasyBase {
    identity: string;
    policyName: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a request to delete one of your Amazon SES identities (an email address or domain).
 */
export declare class DeleteIdentityRequest extends SpeakeasyBase {
    identity: string;
}

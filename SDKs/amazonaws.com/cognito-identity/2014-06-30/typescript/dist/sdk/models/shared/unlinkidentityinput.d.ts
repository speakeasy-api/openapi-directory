import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Input to the UnlinkIdentity action.
 */
export declare class UnlinkIdentityInput extends SpeakeasyBase {
    identityId: string;
    logins: Record<string, string>;
    loginsToRemove: string[];
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class Destiny2GetLinkedProfilesRequest extends SpeakeasyBase {
    /**
     * (optional) if set to 'true', all memberships regardless of whether they're obscured by overrides will be returned. Normal privacy restrictions on account linking will still apply no matter what.
     */
    getAllMemberships?: boolean;
    /**
     * The ID of the membership whose linked Destiny accounts you want returned. Make sure your membership ID matches its Membership Type: don't pass us a PSN membership ID and the XBox membership type, it's not going to work!
     */
    membershipId: number;
    /**
     * The type for the membership whose linked Destiny accounts you want returned.
     */
    membershipType: number;
}
/**
 * I know what you seek. You seek linked accounts. Found them, you have.
 *
 * @remarks
 * This contract returns a minimal amount of data about Destiny Accounts that are linked through your Bungie.Net account. We will not return accounts in this response whose
 */
export declare class Destiny2GetLinkedProfiles200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    /**
     * I know what you seek. You seek linked accounts. Found them, you have.
     *
     * @remarks
     * This contract returns a minimal amount of data about Destiny Accounts that are linked through your Bungie.Net account. We will not return accounts in this response whose
     */
    response?: shared.DestinyResponsesDestinyLinkedProfilesResponse;
    throttleSeconds?: number;
}
export declare class Destiny2GetLinkedProfilesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

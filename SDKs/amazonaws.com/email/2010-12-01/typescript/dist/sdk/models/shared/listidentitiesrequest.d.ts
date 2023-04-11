import { SpeakeasyBase } from "../../../internal/utils";
import { IdentityTypeEnum } from "./identitytypeenum";
/**
 * Represents a request to return a list of all identities (email addresses and domains) that you have attempted to verify under your AWS account, regardless of verification status.
 */
export declare class ListIdentitiesRequest extends SpeakeasyBase {
    identityType?: IdentityTypeEnum;
    maxItems?: number;
    nextToken?: string;
}

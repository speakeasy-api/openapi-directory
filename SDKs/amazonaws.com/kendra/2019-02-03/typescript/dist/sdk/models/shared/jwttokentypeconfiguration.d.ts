import { SpeakeasyBase } from "../../../internal/utils";
import { KeyLocationEnum } from "./keylocationenum";
/**
 * Provides the configuration information for the JWT token type.
 */
export declare class JwtTokenTypeConfiguration extends SpeakeasyBase {
    claimRegex?: string;
    groupAttributeField?: string;
    issuer?: string;
    keyLocation: KeyLocationEnum;
    secretManagerArn?: string;
    url?: string;
    userNameAttributeField?: string;
}

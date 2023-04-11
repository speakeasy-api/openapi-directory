import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateAccessTokenRequest extends SpeakeasyBase {
    /**
     * Valid scopes: "repo:admin", "repo:write", "repo:read", "repo:public_read"
     *
     * @remarks
     *
     */
    scopes: string[];
    /**
     * Friendly name for you to identify the token.
     */
    tokenLabel: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class CreateAccessTokensResponse extends SpeakeasyBase {
    clientId?: string;
    createdAt?: string;
    creatorIp?: string;
    creatorUa?: string;
    generatedBy?: string;
    isActive?: boolean;
    lastUsed?: string;
    scopes?: string[];
    token?: string;
    tokenLabel?: string;
    uuid?: string;
}

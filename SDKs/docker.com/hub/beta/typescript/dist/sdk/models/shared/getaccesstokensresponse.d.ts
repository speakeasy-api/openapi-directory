import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAccessTokensResponseResults extends SpeakeasyBase {
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
/**
 * OK
 */
export declare class GetAccessTokensResponse extends SpeakeasyBase {
    activeCount?: number;
    count?: number;
    next?: string;
    previous?: string;
    results?: GetAccessTokensResponseResults[];
}

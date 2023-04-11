import { SpeakeasyBase } from "../../../internal/utils";
import { AccessTokenSummary } from "./accesstokensummary";
/**
 * Success
 */
export declare class ListAccessTokensResponse extends SpeakeasyBase {
    items: AccessTokenSummary[];
    nextToken?: string;
}

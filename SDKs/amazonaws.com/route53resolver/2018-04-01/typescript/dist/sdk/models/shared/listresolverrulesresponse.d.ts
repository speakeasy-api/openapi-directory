import { SpeakeasyBase } from "../../../internal/utils";
import { ResolverRule } from "./resolverrule";
/**
 * Success
 */
export declare class ListResolverRulesResponse extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    resolverRules?: ResolverRule[];
}

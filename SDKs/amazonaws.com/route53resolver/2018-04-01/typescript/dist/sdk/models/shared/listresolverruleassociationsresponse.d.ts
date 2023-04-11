import { SpeakeasyBase } from "../../../internal/utils";
import { ResolverRuleAssociation } from "./resolverruleassociation";
/**
 * Success
 */
export declare class ListResolverRuleAssociationsResponse extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    resolverRuleAssociations?: ResolverRuleAssociation[];
}

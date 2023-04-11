import { SpeakeasyBase } from "../../../internal/utils";
import { ResolverQueryLogConfigAssociation } from "./resolverquerylogconfigassociation";
/**
 * Success
 */
export declare class ListResolverQueryLogConfigAssociationsResponse extends SpeakeasyBase {
    nextToken?: string;
    resolverQueryLogConfigAssociations?: ResolverQueryLogConfigAssociation[];
    totalCount?: number;
    totalFilteredCount?: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class DescribeNetworkInsightsAccessScopesResultNetworkInsightsAccessScopesTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes a Network Access Scope.
 */
export declare class DescribeNetworkInsightsAccessScopesResultNetworkInsightsAccessScopes extends SpeakeasyBase {
    createdDate?: Date;
    networkInsightsAccessScopeArn?: string;
    networkInsightsAccessScopeId?: string;
    tags?: DescribeNetworkInsightsAccessScopesResultNetworkInsightsAccessScopesTags[];
    updatedDate?: Date;
}
/**
 * Success
 */
export declare class DescribeNetworkInsightsAccessScopesResult extends SpeakeasyBase {
    networkInsightsAccessScopes?: DescribeNetworkInsightsAccessScopesResultNetworkInsightsAccessScopes[];
    nextToken?: string;
}

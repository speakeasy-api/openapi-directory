import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the scope.
 */
export declare enum DescribeIpamScopesResultIpamScopesIpamScopeTypeEnum {
    Public = "public",
    Private = "private"
}
/**
 * The state of the IPAM scope.
 */
export declare enum DescribeIpamScopesResultIpamScopesStateEnum {
    CreateInProgress = "create-in-progress",
    CreateComplete = "create-complete",
    CreateFailed = "create-failed",
    ModifyInProgress = "modify-in-progress",
    ModifyComplete = "modify-complete",
    ModifyFailed = "modify-failed",
    DeleteInProgress = "delete-in-progress",
    DeleteComplete = "delete-complete",
    DeleteFailed = "delete-failed",
    IsolateInProgress = "isolate-in-progress",
    IsolateComplete = "isolate-complete",
    RestoreInProgress = "restore-in-progress"
}
/**
 * Describes a tag.
 */
export declare class DescribeIpamScopesResultIpamScopesTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * <p>In IPAM, a scope is the highest-level container within IPAM. An IPAM contains two default scopes. Each scope represents the IP space for a single network. The private scope is intended for all private IP address space. The public scope is intended for all public IP address space. Scopes enable you to reuse IP addresses across multiple unconnected networks without causing IP address overlap or conflict.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/how-it-works-ipam.html">How IPAM works</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
 */
export declare class DescribeIpamScopesResultIpamScopes extends SpeakeasyBase {
    description?: string;
    ipamArn?: string;
    ipamRegion?: string;
    ipamScopeArn?: string;
    ipamScopeId?: string;
    ipamScopeType?: DescribeIpamScopesResultIpamScopesIpamScopeTypeEnum;
    isDefault?: boolean;
    ownerId?: string;
    poolCount?: number;
    state?: DescribeIpamScopesResultIpamScopesStateEnum;
    tags?: DescribeIpamScopesResultIpamScopesTags[];
}
/**
 * Success
 */
export declare class DescribeIpamScopesResult extends SpeakeasyBase {
    ipamScopes?: DescribeIpamScopesResultIpamScopes[];
    nextToken?: string;
}

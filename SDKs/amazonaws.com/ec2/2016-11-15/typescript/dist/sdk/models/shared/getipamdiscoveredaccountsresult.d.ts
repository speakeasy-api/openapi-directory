import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>The discovery failure code.</p> <ul> <li> <p> <code>assume-role-failure</code> - IPAM could not assume the Amazon Web Services IAM service-linked role. This could be because of any of the following:</p> <ul> <li> <p>SLR has not been created yet and IPAM is still creating it.</p> </li> <li> <p>You have opted-out of the IPAM home Region.</p> </li> <li> <p>Account you are using as your IPAM account has been suspended.</p> </li> </ul> </li> <li> <p> <code>throttling-failure</code> - IPAM account is already using the allotted transactions per second and IPAM is receiving a throttling error when assuming the Amazon Web Services IAM SLR.</p> </li> <li> <p> <code>unauthorized-failure</code> - Amazon Web Services account making the request is not authorized. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/errors-overview.html">AuthFailure</a> in the <i>Amazon Elastic Compute Cloud API Reference</i>.</p> </li> </ul>
 */
export declare enum GetIpamDiscoveredAccountsResultIpamDiscoveredAccountsFailureReasonCodeEnum {
    AssumeRoleFailure = "assume-role-failure",
    ThrottlingFailure = "throttling-failure",
    UnauthorizedFailure = "unauthorized-failure"
}
/**
 * The resource discovery failure reason.
 */
export declare class GetIpamDiscoveredAccountsResultIpamDiscoveredAccountsFailureReason extends SpeakeasyBase {
    code?: GetIpamDiscoveredAccountsResultIpamDiscoveredAccountsFailureReasonCodeEnum;
    message?: string;
}
/**
 * An IPAM discovered account. A discovered account is an Amazon Web Services account that is monitored under a resource discovery. If you have integrated IPAM with Amazon Web Services Organizations, all accounts in the organization are discovered accounts.
 */
export declare class GetIpamDiscoveredAccountsResultIpamDiscoveredAccounts extends SpeakeasyBase {
    accountId?: string;
    discoveryRegion?: string;
    failureReason?: GetIpamDiscoveredAccountsResultIpamDiscoveredAccountsFailureReason;
    lastAttemptedDiscoveryTime?: Date;
    lastSuccessfulDiscoveryTime?: Date;
}
/**
 * Success
 */
export declare class GetIpamDiscoveredAccountsResult extends SpeakeasyBase {
    ipamDiscoveredAccounts?: GetIpamDiscoveredAccountsResultIpamDiscoveredAccounts[];
    nextToken?: string;
}

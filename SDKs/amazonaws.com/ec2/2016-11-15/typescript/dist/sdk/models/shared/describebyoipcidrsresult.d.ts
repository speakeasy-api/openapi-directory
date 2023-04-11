import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the address pool.
 */
export declare enum DescribeByoipCidrsResultByoipCidrsStateEnum {
    Advertised = "advertised",
    Deprovisioned = "deprovisioned",
    FailedDeprovision = "failed-deprovision",
    FailedProvision = "failed-provision",
    PendingDeprovision = "pending-deprovision",
    PendingProvision = "pending-provision",
    Provisioned = "provisioned",
    ProvisionedNotPubliclyAdvertisable = "provisioned-not-publicly-advertisable"
}
/**
 * Information about an address range that is provisioned for use with your Amazon Web Services resources through bring your own IP addresses (BYOIP).
 */
export declare class DescribeByoipCidrsResultByoipCidrs extends SpeakeasyBase {
    cidr?: string;
    description?: string;
    state?: DescribeByoipCidrsResultByoipCidrsStateEnum;
    statusMessage?: string;
}
/**
 * Success
 */
export declare class DescribeByoipCidrsResult extends SpeakeasyBase {
    byoipCidrs?: DescribeByoipCidrsResultByoipCidrs[];
    nextToken?: string;
}

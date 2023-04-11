import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the credit option for CPU usage of a burstable performance instance.
 */
export declare class DescribeInstanceCreditSpecificationsResultInstanceCreditSpecifications extends SpeakeasyBase {
    cpuCredits?: string;
    instanceId?: string;
}
/**
 * Success
 */
export declare class DescribeInstanceCreditSpecificationsResult extends SpeakeasyBase {
    instanceCreditSpecifications?: DescribeInstanceCreditSpecificationsResultInstanceCreditSpecifications[];
    nextToken?: string;
}

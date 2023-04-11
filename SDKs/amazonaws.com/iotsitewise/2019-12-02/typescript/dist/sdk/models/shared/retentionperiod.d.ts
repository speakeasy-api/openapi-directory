import { SpeakeasyBase } from "../../../internal/utils";
/**
 * How many days your data is kept in the hot tier. By default, your data is kept indefinitely in the hot tier.
 */
export declare class RetentionPeriod extends SpeakeasyBase {
    numberOfDays?: number;
    unlimited?: boolean;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { DedicatedTenancySupportResultEnumEnum } from "./dedicatedtenancysupportresultenumenum";
/**
 * Success
 */
export declare class DescribeAccountResult extends SpeakeasyBase {
    dedicatedTenancyManagementCidrRange?: string;
    dedicatedTenancySupport?: DedicatedTenancySupportResultEnumEnum;
}

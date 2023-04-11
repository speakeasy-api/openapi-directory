import { SpeakeasyBase } from "../../../internal/utils";
import { AutoEnableStandardsEnum } from "./autoenablestandardsenum";
/**
 * Success
 */
export declare class DescribeOrganizationConfigurationResponse extends SpeakeasyBase {
    autoEnable?: boolean;
    autoEnableStandards?: AutoEnableStandardsEnum;
    memberAccountLimitReached?: boolean;
}

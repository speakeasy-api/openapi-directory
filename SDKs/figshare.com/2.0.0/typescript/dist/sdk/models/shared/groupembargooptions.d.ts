import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Embargo permission type
 */
export declare enum GroupEmbargoOptionsTypeEnum {
    LoggedIn = "logged_in",
    IpRange = "ip_range",
    Administrator = "administrator"
}
export declare class GroupEmbargoOptions extends SpeakeasyBase {
    /**
     * Embargo option id
     */
    id: number;
    /**
     * IP range name; value appears if type is ip_range
     */
    ipName: string;
    /**
     * Embargo permission type
     */
    type: GroupEmbargoOptionsTypeEnum;
}

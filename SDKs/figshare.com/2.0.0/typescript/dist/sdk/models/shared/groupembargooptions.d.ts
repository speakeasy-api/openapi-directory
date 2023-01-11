import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GroupEmbargoOptionsTypeEnum {
    LoggedIn = "logged_in",
    IpRange = "ip_range",
    Administrator = "administrator"
}
export declare class GroupEmbargoOptions extends SpeakeasyBase {
    id?: number;
    ipName?: string;
    type?: GroupEmbargoOptionsTypeEnum;
}

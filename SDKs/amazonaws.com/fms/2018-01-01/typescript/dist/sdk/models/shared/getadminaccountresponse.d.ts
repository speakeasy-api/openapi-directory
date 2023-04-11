import { SpeakeasyBase } from "../../../internal/utils";
import { AccountRoleStatusEnum } from "./accountrolestatusenum";
/**
 * Success
 */
export declare class GetAdminAccountResponse extends SpeakeasyBase {
    adminAccount?: string;
    roleStatus?: AccountRoleStatusEnum;
}

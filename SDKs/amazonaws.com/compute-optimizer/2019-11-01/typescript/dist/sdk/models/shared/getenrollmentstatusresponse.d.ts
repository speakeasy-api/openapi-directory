import { SpeakeasyBase } from "../../../internal/utils";
import { StatusEnum } from "./statusenum";
/**
 * Success
 */
export declare class GetEnrollmentStatusResponse extends SpeakeasyBase {
    lastUpdatedTimestamp?: Date;
    memberAccountsEnrolled?: boolean;
    numberOfMemberAccountsOptedIn?: number;
    status?: StatusEnum;
    statusReason?: string;
}

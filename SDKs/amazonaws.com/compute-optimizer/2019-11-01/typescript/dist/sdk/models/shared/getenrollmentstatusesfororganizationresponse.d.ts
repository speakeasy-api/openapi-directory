import { SpeakeasyBase } from "../../../internal/utils";
import { AccountEnrollmentStatus } from "./accountenrollmentstatus";
/**
 * Success
 */
export declare class GetEnrollmentStatusesForOrganizationResponse extends SpeakeasyBase {
    accountEnrollmentStatuses?: AccountEnrollmentStatus[];
    nextToken?: string;
}

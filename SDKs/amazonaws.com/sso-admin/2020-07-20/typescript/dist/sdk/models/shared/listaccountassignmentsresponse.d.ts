import { SpeakeasyBase } from "../../../internal/utils";
import { AccountAssignment } from "./accountassignment";
/**
 * Success
 */
export declare class ListAccountAssignmentsResponse extends SpeakeasyBase {
    accountAssignments?: AccountAssignment[];
    nextToken?: string;
}

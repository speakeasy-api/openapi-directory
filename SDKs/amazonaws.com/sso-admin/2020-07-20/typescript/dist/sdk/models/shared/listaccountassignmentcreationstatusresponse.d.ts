import { SpeakeasyBase } from "../../../internal/utils";
import { AccountAssignmentOperationStatusMetadata } from "./accountassignmentoperationstatusmetadata";
/**
 * Success
 */
export declare class ListAccountAssignmentCreationStatusResponse extends SpeakeasyBase {
    accountAssignmentsCreationStatus?: AccountAssignmentOperationStatusMetadata[];
    nextToken?: string;
}

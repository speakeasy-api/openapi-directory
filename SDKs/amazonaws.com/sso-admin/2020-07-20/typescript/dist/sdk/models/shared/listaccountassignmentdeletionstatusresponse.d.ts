import { SpeakeasyBase } from "../../../internal/utils";
import { AccountAssignmentOperationStatusMetadata } from "./accountassignmentoperationstatusmetadata";
/**
 * Success
 */
export declare class ListAccountAssignmentDeletionStatusResponse extends SpeakeasyBase {
    accountAssignmentsDeletionStatus?: AccountAssignmentOperationStatusMetadata[];
    nextToken?: string;
}

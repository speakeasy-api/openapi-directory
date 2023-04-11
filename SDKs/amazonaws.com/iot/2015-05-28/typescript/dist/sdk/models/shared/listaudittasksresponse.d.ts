import { SpeakeasyBase } from "../../../internal/utils";
import { AuditTaskMetadata } from "./audittaskmetadata";
/**
 * Success
 */
export declare class ListAuditTasksResponse extends SpeakeasyBase {
    nextToken?: string;
    tasks?: AuditTaskMetadata[];
}

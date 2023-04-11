import { SpeakeasyBase } from "../../../internal/utils";
import { AuditMitigationActionExecutionMetadata } from "./auditmitigationactionexecutionmetadata";
/**
 * Success
 */
export declare class ListAuditMitigationActionsExecutionsResponse extends SpeakeasyBase {
    actionsExecutions?: AuditMitigationActionExecutionMetadata[];
    nextToken?: string;
}

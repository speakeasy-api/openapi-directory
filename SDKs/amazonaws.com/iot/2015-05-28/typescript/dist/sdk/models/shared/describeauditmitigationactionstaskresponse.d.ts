import { SpeakeasyBase } from "../../../internal/utils";
import { AuditMitigationActionsTaskStatusEnum } from "./auditmitigationactionstaskstatusenum";
import { AuditMitigationActionsTaskTarget } from "./auditmitigationactionstasktarget";
import { MitigationAction } from "./mitigationaction";
import { TaskStatisticsForAuditCheck } from "./taskstatisticsforauditcheck";
/**
 * Success
 */
export declare class DescribeAuditMitigationActionsTaskResponse extends SpeakeasyBase {
    actionsDefinition?: MitigationAction[];
    auditCheckToActionsMapping?: Record<string, string[]>;
    endTime?: Date;
    startTime?: Date;
    target?: AuditMitigationActionsTaskTarget;
    taskStatistics?: Record<string, TaskStatisticsForAuditCheck>;
    taskStatus?: AuditMitigationActionsTaskStatusEnum;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { AuditCheckDetails } from "./auditcheckdetails";
import { AuditTaskStatusEnum } from "./audittaskstatusenum";
import { AuditTaskTypeEnum } from "./audittasktypeenum";
import { TaskStatistics } from "./taskstatistics";
/**
 * Success
 */
export declare class DescribeAuditTaskResponse extends SpeakeasyBase {
    auditDetails?: Record<string, AuditCheckDetails>;
    scheduledAuditName?: string;
    taskStartTime?: Date;
    taskStatistics?: TaskStatistics;
    taskStatus?: AuditTaskStatusEnum;
    taskType?: AuditTaskTypeEnum;
}

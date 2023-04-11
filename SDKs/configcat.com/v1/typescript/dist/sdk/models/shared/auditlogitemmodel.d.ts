import { SpeakeasyBase } from "../../../internal/utils";
import { AuditLogTypeEnum } from "./auditlogtypeenum";
export declare class AuditLogItemModel extends SpeakeasyBase {
    actionTarget?: string;
    auditLogDateTime?: Date;
    auditLogId?: number;
    auditLogType?: string;
    auditLogTypeEnum?: AuditLogTypeEnum;
    details?: string;
    userEmail?: string;
    userName?: string;
    where?: string;
    why?: string;
}

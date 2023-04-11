import { SpeakeasyBase } from "../../../internal/utils";
import { AuditCase } from "./auditcase";
import { OffsetInfo } from "./offsetinfo";
export declare class AuditCasePage extends SpeakeasyBase {
    pagination?: OffsetInfo;
    results?: AuditCase[];
}

import { SpeakeasyBase } from "../../../internal/utils";
import { AuditPolicyStateEnum } from "./auditpolicystateenum";
export declare class ModifyActivityStreamRequest extends SpeakeasyBase {
    auditPolicyState?: AuditPolicyStateEnum;
    resourceArn?: string;
}

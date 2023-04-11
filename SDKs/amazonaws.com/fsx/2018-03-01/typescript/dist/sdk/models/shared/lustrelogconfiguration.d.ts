import { SpeakeasyBase } from "../../../internal/utils";
import { LustreAccessAuditLogLevelEnum } from "./lustreaccessauditloglevelenum";
/**
 * The configuration for Lustre logging used to write the enabled logging events for your Amazon FSx for Lustre file system or Amazon File Cache resource to Amazon CloudWatch Logs.
 */
export declare class LustreLogConfiguration extends SpeakeasyBase {
    destination?: string;
    level: LustreAccessAuditLogLevelEnum;
}

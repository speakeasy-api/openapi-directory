import { SpeakeasyBase } from "../../../internal/utils";
import { AuditCheckConfiguration } from "./auditcheckconfiguration";
import { AuditNotificationTarget } from "./auditnotificationtarget";
/**
 * Success
 */
export declare class DescribeAccountAuditConfigurationResponse extends SpeakeasyBase {
    auditCheckConfigurations?: Record<string, AuditCheckConfiguration>;
    auditNotificationTargetConfigurations?: Record<string, AuditNotificationTarget>;
    roleArn?: string;
}

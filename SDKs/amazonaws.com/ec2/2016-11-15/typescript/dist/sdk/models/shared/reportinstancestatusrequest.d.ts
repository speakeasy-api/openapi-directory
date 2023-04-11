import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ReportInstanceStatusRequestReasonCodesEnum {
    InstanceStuckInState = "instance-stuck-in-state",
    Unresponsive = "unresponsive",
    NotAcceptingCredentials = "not-accepting-credentials",
    PasswordNotAvailable = "password-not-available",
    PerformanceNetwork = "performance-network",
    PerformanceInstanceStore = "performance-instance-store",
    PerformanceEbsVolume = "performance-ebs-volume",
    PerformanceOther = "performance-other",
    Other = "other"
}
/**
 * The status of all instances listed.
 */
export declare enum ReportInstanceStatusRequestStatusEnum {
    Ok = "ok",
    Impaired = "impaired"
}
export declare class ReportInstanceStatusRequest extends SpeakeasyBase {
    description?: string;
    dryRun?: boolean;
    endTime?: Date;
    instances: string[];
    reasonCodes: ReportInstanceStatusRequestReasonCodesEnum[];
    startTime?: Date;
    status: ReportInstanceStatusRequestStatusEnum;
}

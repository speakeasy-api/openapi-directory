import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETReportInstanceStatusActionEnum {
    ReportInstanceStatus = "ReportInstanceStatus"
}
export declare enum GETReportInstanceStatusReasonCodeEnum {
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
export declare enum GETReportInstanceStatusStatusEnum {
    Ok = "ok",
    Impaired = "impaired"
}
export declare enum GETReportInstanceStatusVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETReportInstanceStatusRequest extends SpeakeasyBase {
    action: GETReportInstanceStatusActionEnum;
    /**
     * Descriptive text about the health state of your instance.
     */
    description?: string;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The time at which the reported instance health state ended.
     */
    endTime?: Date;
    /**
     * The instances.
     */
    instanceId: string[];
    /**
     * <p>The reason codes that describe the health state of your instance.</p> <ul> <li> <p> <code>instance-stuck-in-state</code>: My instance is stuck in a state.</p> </li> <li> <p> <code>unresponsive</code>: My instance is unresponsive.</p> </li> <li> <p> <code>not-accepting-credentials</code>: My instance is not accepting my credentials.</p> </li> <li> <p> <code>password-not-available</code>: A password is not available for my instance.</p> </li> <li> <p> <code>performance-network</code>: My instance is experiencing performance problems that I believe are network related.</p> </li> <li> <p> <code>performance-instance-store</code>: My instance is experiencing performance problems that I believe are related to the instance stores.</p> </li> <li> <p> <code>performance-ebs-volume</code>: My instance is experiencing performance problems that I believe are related to an EBS volume.</p> </li> <li> <p> <code>performance-other</code>: My instance is experiencing performance problems.</p> </li> <li> <p> <code>other</code>: [explain using the description parameter]</p> </li> </ul>
     */
    reasonCode: GETReportInstanceStatusReasonCodeEnum[];
    /**
     * The time at which the reported instance health state began.
     */
    startTime?: Date;
    /**
     * The status of all instances listed.
     */
    status: GETReportInstanceStatusStatusEnum;
    version: GETReportInstanceStatusVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETReportInstanceStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

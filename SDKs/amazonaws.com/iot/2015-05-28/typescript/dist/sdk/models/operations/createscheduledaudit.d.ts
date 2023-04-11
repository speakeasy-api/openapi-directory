import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The day of the week on which the scheduled audit takes place, either <code>SUN</code>, <code>MON</code>, <code>TUE</code>, <code>WED</code>, <code>THU</code>, <code>FRI</code>, or <code>SAT</code>. This field is required if the <code>frequency</code> parameter is set to <code>WEEKLY</code> or <code>BIWEEKLY</code>.
 */
export declare enum CreateScheduledAuditRequestBodyDayOfWeekEnum {
    Sun = "SUN",
    Mon = "MON",
    Tue = "TUE",
    Wed = "WED",
    Thu = "THU",
    Fri = "FRI",
    Sat = "SAT"
}
/**
 * How often the scheduled audit takes place, either <code>DAILY</code>, <code>WEEKLY</code>, <code>BIWEEKLY</code> or <code>MONTHLY</code>. The start time of each audit is determined by the system.
 */
export declare enum CreateScheduledAuditRequestBodyFrequencyEnum {
    Daily = "DAILY",
    Weekly = "WEEKLY",
    Biweekly = "BIWEEKLY",
    Monthly = "MONTHLY"
}
export declare class CreateScheduledAuditRequestBody extends SpeakeasyBase {
    /**
     * The day of the month on which the scheduled audit takes place. This can be "1" through "31" or "LAST". This field is required if the "frequency" parameter is set to <code>MONTHLY</code>. If days 29 to 31 are specified, and the month doesn't have that many days, the audit takes place on the <code>LAST</code> day of the month.
     */
    dayOfMonth?: string;
    /**
     * The day of the week on which the scheduled audit takes place, either <code>SUN</code>, <code>MON</code>, <code>TUE</code>, <code>WED</code>, <code>THU</code>, <code>FRI</code>, or <code>SAT</code>. This field is required if the <code>frequency</code> parameter is set to <code>WEEKLY</code> or <code>BIWEEKLY</code>.
     */
    dayOfWeek?: CreateScheduledAuditRequestBodyDayOfWeekEnum;
    /**
     * How often the scheduled audit takes place, either <code>DAILY</code>, <code>WEEKLY</code>, <code>BIWEEKLY</code> or <code>MONTHLY</code>. The start time of each audit is determined by the system.
     */
    frequency: CreateScheduledAuditRequestBodyFrequencyEnum;
    /**
     * Metadata that can be used to manage the scheduled audit.
     */
    tags?: shared.Tag[];
    /**
     * Which checks are performed during the scheduled audit. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.)
     */
    targetCheckNames: string[];
}
export declare class CreateScheduledAuditRequest extends SpeakeasyBase {
    requestBody: CreateScheduledAuditRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name you want to give to the scheduled audit. (Max. 128 chars)
     */
    scheduledAuditName: string;
}
export declare class CreateScheduledAuditResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createScheduledAuditResponse?: shared.CreateScheduledAuditResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}

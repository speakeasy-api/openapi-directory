import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeEventsActionEnum {
    DescribeEvents = "DescribeEvents"
}
/**
 * If specified, limits the events returned from this call to include only those with the specified severity or higher.
 */
export declare enum GETDescribeEventsSeverityEnum {
    Trace = "TRACE",
    Debug = "DEBUG",
    Info = "INFO",
    Warn = "WARN",
    Error = "ERROR",
    Fatal = "FATAL"
}
export declare enum GETDescribeEventsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETDescribeEventsRequest extends SpeakeasyBase {
    action: GETDescribeEventsActionEnum;
    /**
     * If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those associated with this application.
     */
    applicationName?: string;
    /**
     *  If specified, AWS Elastic Beanstalk restricts the returned descriptions to those that occur up to, but not including, the <code>EndTime</code>.
     */
    endTime?: Date;
    /**
     * If specified, AWS Elastic Beanstalk restricts the returned descriptions to those associated with this environment.
     */
    environmentId?: string;
    /**
     * If specified, AWS Elastic Beanstalk restricts the returned descriptions to those associated with this environment.
     */
    environmentName?: string;
    /**
     * Specifies the maximum number of events that can be returned, beginning with the most recent event.
     */
    maxRecords?: number;
    /**
     * Pagination token. If specified, the events return the next batch of results.
     */
    nextToken?: string;
    /**
     * The ARN of a custom platform version. If specified, AWS Elastic Beanstalk restricts the returned descriptions to those associated with this custom platform version.
     */
    platformArn?: string;
    /**
     * If specified, AWS Elastic Beanstalk restricts the described events to include only those associated with this request ID.
     */
    requestId?: string;
    /**
     * If specified, limits the events returned from this call to include only those with the specified severity or higher.
     */
    severity?: GETDescribeEventsSeverityEnum;
    /**
     * If specified, AWS Elastic Beanstalk restricts the returned descriptions to those that occur on or after this time.
     */
    startTime?: Date;
    /**
     * If specified, AWS Elastic Beanstalk restricts the returned descriptions to those that are associated with this environment configuration.
     */
    templateName?: string;
    version: GETDescribeEventsVersionEnum;
    /**
     * If specified, AWS Elastic Beanstalk restricts the returned descriptions to those associated with this application version.
     */
    versionLabel?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeEventsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

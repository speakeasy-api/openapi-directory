import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The type of task report.
 */
export declare enum ListThingRegistrationTaskReportsReportTypeEnum {
    Errors = "ERRORS",
    Results = "RESULTS"
}
export declare class ListThingRegistrationTaskReportsRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The maximum number of results to return per request.
     */
    maxResults?: number;
    /**
     * To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.
     */
    nextToken?: string;
    /**
     * The type of task report.
     */
    reportType: ListThingRegistrationTaskReportsReportTypeEnum;
    /**
     * The id of the task.
     */
    taskId: string;
}
export declare class ListThingRegistrationTaskReportsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listThingRegistrationTaskReportsResponse?: shared.ListThingRegistrationTaskReportsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}

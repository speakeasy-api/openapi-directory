import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeOrganizationOverviewRequestBody extends SpeakeasyBase {
    /**
     * The ID of the Amazon Web Services account.
     */
    accountIds?: string[];
    /**
     *  The start of the time range passed in. The start time granularity is at the day level. The floor of the start time is used. Returned information occurred after this day.
     */
    fromTime: Date;
    /**
     * The ID of the organizational unit.
     */
    organizationalUnitIds?: string[];
    /**
     *  The end of the time range passed in. The start time granularity is at the day level. The floor of the start time is used. Returned information occurred before this day. If this is not specified, then the current day is used.
     */
    toTime?: Date;
}
export declare class DescribeOrganizationOverviewRequest extends SpeakeasyBase {
    requestBody: DescribeOrganizationOverviewRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeOrganizationOverviewResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeOrganizationOverviewResponse?: shared.DescribeOrganizationOverviewResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}

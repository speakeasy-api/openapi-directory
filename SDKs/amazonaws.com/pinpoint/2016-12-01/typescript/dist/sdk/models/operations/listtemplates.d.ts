import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListTemplatesRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The  string that specifies which page of results to return in a paginated response. This parameter is not supported for application, campaign, and journey metrics.
     */
    nextToken?: string;
    /**
     * The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.
     */
    pageSize?: string;
    /**
     * The substring to match in the names of the message templates to include in the results. If you specify this value, Amazon Pinpoint returns only those templates whose names begin with the value that you specify.
     */
    prefix?: string;
    /**
     * The type of message template to include in the results. Valid values are: EMAIL, PUSH, SMS, and VOICE. To include all types of templates in the results, don't include this parameter in your request.
     */
    templateType?: string;
}
export declare class ListTemplatesResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * ForbiddenException
     */
    forbiddenException?: any;
    /**
     * InternalServerErrorException
     */
    internalServerErrorException?: any;
    /**
     * Success
     */
    listTemplatesResponse?: shared.ListTemplatesResponse;
    /**
     * MethodNotAllowedException
     */
    methodNotAllowedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}

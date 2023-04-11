import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListJobTemplatesRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The date and time after which the job templates were created.
     */
    createdAfter?: Date;
    /**
     *  The date and time before which the job templates were created.
     */
    createdBefore?: Date;
    /**
     *  The maximum number of job templates that can be listed.
     */
    maxResults?: number;
    /**
     *  The token for the next set of job templates to return.
     */
    nextToken?: string;
}
export declare class ListJobTemplatesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listJobTemplatesResponse?: shared.ListJobTemplatesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}

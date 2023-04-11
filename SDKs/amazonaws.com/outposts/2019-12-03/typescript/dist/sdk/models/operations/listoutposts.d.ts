import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListOutpostsRequest extends SpeakeasyBase {
    /**
     * Filters the results by Availability Zone (for example, <code>us-east-1a</code>).
     */
    availabilityZoneFilter?: string[];
    /**
     * Filters the results by AZ ID (for example, <code>use1-az1</code>).
     */
    availabilityZoneIdFilter?: string[];
    /**
     * Filters the results by the lifecycle status.
     */
    lifeCycleStatusFilter?: string[];
    maxResults?: number;
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListOutpostsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listOutpostsOutput?: shared.ListOutpostsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}

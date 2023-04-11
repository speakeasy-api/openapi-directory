import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * State of the destination.
 */
export declare enum ListDestinationsStateEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    Decommissioned = "DECOMMISSIONED"
}
export declare class ListDestinationsRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    maxResults?: number;
    nextToken?: string;
    site: string;
    /**
     * State of the destination.
     */
    state?: ListDestinationsStateEnum;
}
export declare class ListDestinationsResponse extends SpeakeasyBase {
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
    listDestinationsResponse?: shared.ListDestinationsResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
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

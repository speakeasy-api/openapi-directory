import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListConfiguredTableAssociationsRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The maximum size of the results that is returned per call.
     */
    maxResults?: number;
    /**
     * A unique identifier for the membership to list configured table associations for. Currently accepts the membership ID.
     */
    membershipIdentifier: string;
    /**
     * The token value retrieved from a previous call to access the next page of results.
     */
    nextToken?: string;
}
export declare class ListConfiguredTableAssociationsResponse extends SpeakeasyBase {
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
    listConfiguredTableAssociationsOutput?: shared.ListConfiguredTableAssociationsOutput;
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

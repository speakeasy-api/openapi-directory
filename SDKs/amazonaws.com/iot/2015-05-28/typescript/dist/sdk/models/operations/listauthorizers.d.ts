import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The status of the list authorizers request.
 */
export declare enum ListAuthorizersStatusEnum {
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}
export declare class ListAuthorizersRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Return the list of authorizers in ascending alphabetical order.
     */
    isAscendingOrder?: boolean;
    /**
     * A marker used to get the next set of results.
     */
    marker?: string;
    /**
     * The maximum number of results to return at one time.
     */
    pageSize?: number;
    /**
     * The status of the list authorizers request.
     */
    status?: ListAuthorizersStatusEnum;
}
export declare class ListAuthorizersResponse extends SpeakeasyBase {
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
    listAuthorizersResponse?: shared.ListAuthorizersResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
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

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListDevicesRequestBody extends SpeakeasyBase {
    /**
     * The ARN of the fleet.
     */
    fleetArn: string;
    /**
     * The maximum number of results to be included in the next page.
     */
    maxResults?: number;
    /**
     * The pagination token used to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
     */
    nextToken?: string;
}
export declare class ListDevicesRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: ListDevicesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListDevicesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerErrorException
     */
    internalServerErrorException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listDevicesResponse?: shared.ListDevicesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}

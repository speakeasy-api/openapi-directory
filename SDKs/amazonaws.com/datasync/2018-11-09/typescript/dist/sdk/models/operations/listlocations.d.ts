import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListLocationsXAmzTargetEnum {
    FmrsServiceListLocations = "FmrsService.ListLocations"
}
export declare class ListLocationsRequest extends SpeakeasyBase {
    listLocationsRequest: shared.ListLocationsRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListLocationsXAmzTargetEnum;
}
export declare class ListLocationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listLocationsResponse?: shared.ListLocationsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListSatellitesRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Maximum number of satellites returned.
     */
    maxResults?: number;
    /**
     * Next token that can be supplied in the next call to get the next page of satellites.
     */
    nextToken?: string;
}
export declare class ListSatellitesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DependencyException
     */
    dependencyException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * Success
     */
    listSatellitesResponse?: shared.ListSatellitesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}

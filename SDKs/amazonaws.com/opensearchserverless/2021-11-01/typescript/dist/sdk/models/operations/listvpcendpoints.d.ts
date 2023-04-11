import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListVpcEndpointsXAmzTargetEnum {
    OpenSearchServerlessListVpcEndpoints = "OpenSearchServerless.ListVpcEndpoints"
}
export declare class ListVpcEndpointsRequest extends SpeakeasyBase {
    listVpcEndpointsRequest: shared.ListVpcEndpointsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListVpcEndpointsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListVpcEndpointsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listVpcEndpointsResponse?: shared.ListVpcEndpointsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}

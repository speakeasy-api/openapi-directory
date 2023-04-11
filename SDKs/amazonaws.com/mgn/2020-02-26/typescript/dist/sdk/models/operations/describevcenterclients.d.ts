import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeVcenterClientsRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Maximum results to be returned in DescribeVcenterClients.
     */
    maxResults?: number;
    /**
     * Next pagination token to be provided for DescribeVcenterClients.
     */
    nextToken?: string;
}
export declare class DescribeVcenterClientsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeVcenterClientsResponse?: shared.DescribeVcenterClientsResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UninitializedAccountException
     */
    uninitializedAccountException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}

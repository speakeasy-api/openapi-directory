import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A set of filters by which to return Source Servers.
 */
export declare class DescribeSourceServersRequestBodyFilters extends SpeakeasyBase {
    hardwareId?: string;
    sourceServerIDs?: string[];
    stagingAccountIDs?: string[];
}
export declare class DescribeSourceServersRequestBody extends SpeakeasyBase {
    /**
     * A set of filters by which to return Source Servers.
     */
    filters?: DescribeSourceServersRequestBodyFilters;
    /**
     * Maximum number of Source Servers to retrieve.
     */
    maxResults?: number;
    /**
     * The token of the next Source Server to retrieve.
     */
    nextToken?: string;
}
export declare class DescribeSourceServersRequest extends SpeakeasyBase {
    requestBody: DescribeSourceServersRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class DescribeSourceServersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeSourceServersResponse?: shared.DescribeSourceServersResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * UninitializedAccountException
     */
    uninitializedAccountException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}

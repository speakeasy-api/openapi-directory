import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeReplicationConfigurationTemplatesRequestBody extends SpeakeasyBase {
    /**
     * Maximum number of Replication Configuration Templates to retrieve.
     */
    maxResults?: number;
    /**
     * The token of the next Replication Configuration Template to retrieve.
     */
    nextToken?: string;
    /**
     * The IDs of the Replication Configuration Templates to retrieve. An empty list means all Replication Configuration Templates.
     */
    replicationConfigurationTemplateIDs?: string[];
}
export declare class DescribeReplicationConfigurationTemplatesRequest extends SpeakeasyBase {
    requestBody: DescribeReplicationConfigurationTemplatesRequestBody;
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
export declare class DescribeReplicationConfigurationTemplatesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeReplicationConfigurationTemplatesResponse?: shared.DescribeReplicationConfigurationTemplatesResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
     * UninitializedAccountException
     */
    uninitializedAccountException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}

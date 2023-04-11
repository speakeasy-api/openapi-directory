import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeReplicationConfigurationTemplatesRequestBody extends SpeakeasyBase {
    /**
     * Request to describe Replication Configuration template by max results.
     */
    maxResults?: number;
    /**
     * Request to describe Replication Configuration template by next token.
     */
    nextToken?: string;
    /**
     * Request to describe Replication Configuration template by template IDs.
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

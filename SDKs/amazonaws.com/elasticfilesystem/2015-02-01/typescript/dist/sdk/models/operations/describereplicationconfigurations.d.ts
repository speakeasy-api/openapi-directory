import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeReplicationConfigurationsRequest extends SpeakeasyBase {
    /**
     * You can retrieve the replication configuration for a specific file system by providing its file system ID.
     */
    fileSystemId?: string;
    /**
     * (Optional) To limit the number of objects returned in a response, you can specify the <code>MaxItems</code> parameter. The default value is 100.
     */
    maxResults?: number;
    /**
     *  <code>NextToken</code> is present if the response is paginated. You can use <code>NextToken</code> in a subsequent request to fetch the next page of output.
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeReplicationConfigurationsResponse extends SpeakeasyBase {
    /**
     * BadRequest
     */
    badRequest?: any;
    contentType: string;
    /**
     * Success
     */
    describeReplicationConfigurationsResponse?: shared.DescribeReplicationConfigurationsResponse;
    /**
     * FileSystemNotFound
     */
    fileSystemNotFound?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * ReplicationNotFound
     */
    replicationNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}

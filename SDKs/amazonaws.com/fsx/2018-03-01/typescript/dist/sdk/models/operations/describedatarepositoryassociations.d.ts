import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeDataRepositoryAssociationsXAmzTargetEnum {
    AWSSimbaAPIServiceV20180301DescribeDataRepositoryAssociations = "AWSSimbaAPIService_v20180301.DescribeDataRepositoryAssociations"
}
export declare class DescribeDataRepositoryAssociationsRequest extends SpeakeasyBase {
    describeDataRepositoryAssociationsRequest: shared.DescribeDataRepositoryAssociationsRequest;
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
    xAmzTarget: DescribeDataRepositoryAssociationsXAmzTargetEnum;
}
export declare class DescribeDataRepositoryAssociationsResponse extends SpeakeasyBase {
    /**
     * BadRequest
     */
    badRequest?: any;
    contentType: string;
    /**
     * DataRepositoryAssociationNotFound
     */
    dataRepositoryAssociationNotFound?: any;
    /**
     * Success
     */
    describeDataRepositoryAssociationsResponse?: shared.DescribeDataRepositoryAssociationsResponse;
    /**
     * FileSystemNotFound
     */
    fileSystemNotFound?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidDataRepositoryType
     */
    invalidDataRepositoryType?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

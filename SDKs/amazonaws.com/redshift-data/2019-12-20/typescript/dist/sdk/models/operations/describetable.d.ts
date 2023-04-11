import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeTableXAmzTargetEnum {
    RedshiftDataDescribeTable = "RedshiftData.DescribeTable"
}
export declare class DescribeTableRequest extends SpeakeasyBase {
    describeTableRequest: shared.DescribeTableRequest;
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
    xAmzTarget: DescribeTableXAmzTargetEnum;
}
export declare class DescribeTableResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DatabaseConnectionException
     */
    databaseConnectionException?: any;
    /**
     * Success
     */
    describeTableResponse?: shared.DescribeTableResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}

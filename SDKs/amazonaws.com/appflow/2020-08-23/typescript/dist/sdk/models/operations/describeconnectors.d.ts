import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeConnectorsRequestBody extends SpeakeasyBase {
    /**
     *  The type of connector, such as Salesforce, Amplitude, and so on.
     */
    connectorTypes?: shared.ConnectorTypeEnum[];
    /**
     * The maximum number of items that should be returned in the result set. The default is 20.
     */
    maxResults?: number;
    /**
     *  The pagination token for the next page of data.
     */
    nextToken?: string;
}
export declare class DescribeConnectorsRequest extends SpeakeasyBase {
    requestBody: DescribeConnectorsRequestBody;
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
export declare class DescribeConnectorsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeConnectorsResponse?: shared.DescribeConnectorsResponse;
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

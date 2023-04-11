import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeEndpointTypesXAmzTargetEnum {
    AmazonDMSv20160101DescribeEndpointTypes = "AmazonDMSv20160101.DescribeEndpointTypes"
}
export declare class DescribeEndpointTypesRequest extends SpeakeasyBase {
    describeEndpointTypesMessage: shared.DescribeEndpointTypesMessage;
    /**
     * Pagination token
     */
    marker?: string;
    /**
     * Pagination limit
     */
    maxRecords?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEndpointTypesXAmzTargetEnum;
}
export declare class DescribeEndpointTypesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeEndpointTypesResponse?: shared.DescribeEndpointTypesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

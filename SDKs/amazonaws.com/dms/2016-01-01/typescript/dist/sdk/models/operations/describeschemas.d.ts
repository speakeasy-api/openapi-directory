import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeSchemasXAmzTargetEnum {
    AmazonDMSv20160101DescribeSchemas = "AmazonDMSv20160101.DescribeSchemas"
}
export declare class DescribeSchemasRequest extends SpeakeasyBase {
    describeSchemasMessage: shared.DescribeSchemasMessage;
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
    xAmzTarget: DescribeSchemasXAmzTargetEnum;
}
export declare class DescribeSchemasResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeSchemasResponse?: shared.DescribeSchemasResponse;
    /**
     * InvalidResourceStateFault
     */
    invalidResourceStateFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundFault
     */
    resourceNotFoundFault?: any;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeFleetAdvisorSchemasXAmzTargetEnum {
    AmazonDMSv20160101DescribeFleetAdvisorSchemas = "AmazonDMSv20160101.DescribeFleetAdvisorSchemas"
}
export declare class DescribeFleetAdvisorSchemasRequest extends SpeakeasyBase {
    describeFleetAdvisorSchemasRequest: shared.DescribeFleetAdvisorSchemasRequest;
    /**
     * Pagination limit
     */
    maxRecords?: string;
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
    xAmzTarget: DescribeFleetAdvisorSchemasXAmzTargetEnum;
}
export declare class DescribeFleetAdvisorSchemasResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeFleetAdvisorSchemasResponse?: shared.DescribeFleetAdvisorSchemasResponse;
    /**
     * InvalidResourceStateFault
     */
    invalidResourceStateFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

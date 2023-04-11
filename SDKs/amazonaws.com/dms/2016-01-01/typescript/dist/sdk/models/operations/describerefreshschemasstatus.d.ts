import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeRefreshSchemasStatusXAmzTargetEnum {
    AmazonDMSv20160101DescribeRefreshSchemasStatus = "AmazonDMSv20160101.DescribeRefreshSchemasStatus"
}
export declare class DescribeRefreshSchemasStatusRequest extends SpeakeasyBase {
    describeRefreshSchemasStatusMessage: shared.DescribeRefreshSchemasStatusMessage;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeRefreshSchemasStatusXAmzTargetEnum;
}
export declare class DescribeRefreshSchemasStatusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeRefreshSchemasStatusResponse?: shared.DescribeRefreshSchemasStatusResponse;
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

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeRemediationExceptionsXAmzTargetEnum {
    StarlingDoveServiceDescribeRemediationExceptions = "StarlingDoveService.DescribeRemediationExceptions"
}
export declare class DescribeRemediationExceptionsRequest extends SpeakeasyBase {
    describeRemediationExceptionsRequest: shared.DescribeRemediationExceptionsRequest;
    /**
     * Pagination limit
     */
    limit?: string;
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
    xAmzTarget: DescribeRemediationExceptionsXAmzTargetEnum;
}
export declare class DescribeRemediationExceptionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeRemediationExceptionsResponse?: shared.DescribeRemediationExceptionsResponse;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

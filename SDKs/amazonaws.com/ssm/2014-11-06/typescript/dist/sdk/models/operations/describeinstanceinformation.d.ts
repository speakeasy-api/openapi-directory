import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeInstanceInformationXAmzTargetEnum {
    AmazonSSMDescribeInstanceInformation = "AmazonSSM.DescribeInstanceInformation"
}
export declare class DescribeInstanceInformationRequest extends SpeakeasyBase {
    describeInstanceInformationRequest: shared.DescribeInstanceInformationRequest;
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
    xAmzTarget: DescribeInstanceInformationXAmzTargetEnum;
}
export declare class DescribeInstanceInformationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeInstanceInformationResult?: shared.DescribeInstanceInformationResult;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidFilterKey
     */
    invalidFilterKey?: any;
    /**
     * InvalidInstanceId
     */
    invalidInstanceId?: any;
    /**
     * InvalidInstanceInformationFilterValue
     */
    invalidInstanceInformationFilterValue?: any;
    /**
     * InvalidNextToken
     */
    invalidNextToken?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

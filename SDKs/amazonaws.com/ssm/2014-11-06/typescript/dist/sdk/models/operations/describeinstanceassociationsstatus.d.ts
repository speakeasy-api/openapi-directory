import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeInstanceAssociationsStatusXAmzTargetEnum {
    AmazonSSMDescribeInstanceAssociationsStatus = "AmazonSSM.DescribeInstanceAssociationsStatus"
}
export declare class DescribeInstanceAssociationsStatusRequest extends SpeakeasyBase {
    describeInstanceAssociationsStatusRequest: shared.DescribeInstanceAssociationsStatusRequest;
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
    xAmzTarget: DescribeInstanceAssociationsStatusXAmzTargetEnum;
}
export declare class DescribeInstanceAssociationsStatusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeInstanceAssociationsStatusResult?: shared.DescribeInstanceAssociationsStatusResult;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidInstanceId
     */
    invalidInstanceId?: any;
    /**
     * InvalidNextToken
     */
    invalidNextToken?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

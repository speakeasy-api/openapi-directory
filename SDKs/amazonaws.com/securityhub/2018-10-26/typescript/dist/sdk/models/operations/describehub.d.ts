import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeHubRequest extends SpeakeasyBase {
    /**
     * The ARN of the Hub resource to retrieve.
     */
    hubArn?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeHubResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeHubResponse?: shared.DescribeHubResponse;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidAccessException
     */
    invalidAccessException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

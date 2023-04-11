import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeRecommenderXAmzTargetEnum {
    AmazonPersonalizeDescribeRecommender = "AmazonPersonalize.DescribeRecommender"
}
export declare class DescribeRecommenderRequest extends SpeakeasyBase {
    describeRecommenderRequest: shared.DescribeRecommenderRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeRecommenderXAmzTargetEnum;
}
export declare class DescribeRecommenderResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeRecommenderResponse?: shared.DescribeRecommenderResponse;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}

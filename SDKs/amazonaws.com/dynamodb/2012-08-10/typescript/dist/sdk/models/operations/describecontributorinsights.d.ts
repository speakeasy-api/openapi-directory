import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeContributorInsightsXAmzTargetEnum {
    DynamoDB20120810DescribeContributorInsights = "DynamoDB_20120810.DescribeContributorInsights"
}
export declare class DescribeContributorInsightsRequest extends SpeakeasyBase {
    describeContributorInsightsInput: shared.DescribeContributorInsightsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeContributorInsightsXAmzTargetEnum;
}
export declare class DescribeContributorInsightsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeContributorInsightsOutput?: shared.DescribeContributorInsightsOutput;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

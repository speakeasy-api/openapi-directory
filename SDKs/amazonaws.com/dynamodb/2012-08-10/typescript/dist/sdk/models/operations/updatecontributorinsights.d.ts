import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateContributorInsightsXAmzTargetEnum {
    DynamoDB20120810UpdateContributorInsights = "DynamoDB_20120810.UpdateContributorInsights"
}
export declare class UpdateContributorInsightsRequest extends SpeakeasyBase {
    updateContributorInsightsInput: shared.UpdateContributorInsightsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateContributorInsightsXAmzTargetEnum;
}
export declare class UpdateContributorInsightsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    updateContributorInsightsOutput?: shared.UpdateContributorInsightsOutput;
}

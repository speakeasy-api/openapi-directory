import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBehaviorModelTrainingSummariesRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     *  The maximum number of results to return at one time. The default is 10.
     */
    maxResults?: number;
    /**
     *  The token for the next set of results.
     */
    nextToken?: string;
    /**
     *  The name of the security profile.
     */
    securityProfileName?: string;
}
export declare class GetBehaviorModelTrainingSummariesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getBehaviorModelTrainingSummariesResponse?: shared.GetBehaviorModelTrainingSummariesResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}

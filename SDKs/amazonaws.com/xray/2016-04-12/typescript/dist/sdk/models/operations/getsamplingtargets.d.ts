import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSamplingTargetsRequestBody extends SpeakeasyBase {
    /**
     * Information about rules that the service is using to sample requests.
     */
    samplingStatisticsDocuments: shared.SamplingStatisticsDocument[];
}
export declare class GetSamplingTargetsRequest extends SpeakeasyBase {
    requestBody: GetSamplingTargetsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSamplingTargetsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getSamplingTargetsResult?: shared.GetSamplingTargetsResult;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottledException
     */
    throttledException?: any;
}

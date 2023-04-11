import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeRxNormInferenceJobXAmzTargetEnum {
    ComprehendMedical20181030DescribeRxNormInferenceJob = "ComprehendMedical_20181030.DescribeRxNormInferenceJob"
}
export declare class DescribeRxNormInferenceJobRequest extends SpeakeasyBase {
    describeRxNormInferenceJobRequest: shared.DescribeRxNormInferenceJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeRxNormInferenceJobXAmzTargetEnum;
}
export declare class DescribeRxNormInferenceJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeRxNormInferenceJobResponse?: shared.DescribeRxNormInferenceJobResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}

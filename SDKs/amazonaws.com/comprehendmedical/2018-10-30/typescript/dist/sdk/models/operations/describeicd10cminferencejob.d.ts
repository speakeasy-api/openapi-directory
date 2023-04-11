import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeIcd10CMInferenceJobXAmzTargetEnum {
    ComprehendMedical20181030DescribeIcd10CMInferenceJob = "ComprehendMedical_20181030.DescribeICD10CMInferenceJob"
}
export declare class DescribeIcd10CMInferenceJobRequest extends SpeakeasyBase {
    describeIcd10CMInferenceJobRequest: shared.DescribeIcd10CMInferenceJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeIcd10CMInferenceJobXAmzTargetEnum;
}
export declare class DescribeIcd10CMInferenceJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeIcd10CMInferenceJobResponse?: shared.DescribeIcd10CMInferenceJobResponse;
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

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeSNOMEDCTInferenceJobXAmzTargetEnum {
    ComprehendMedical20181030DescribeSNOMEDCTInferenceJob = "ComprehendMedical_20181030.DescribeSNOMEDCTInferenceJob"
}
export declare class DescribeSNOMEDCTInferenceJobRequest extends SpeakeasyBase {
    describeSNOMEDCTInferenceJobRequest: shared.DescribeSNOMEDCTInferenceJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeSNOMEDCTInferenceJobXAmzTargetEnum;
}
export declare class DescribeSNOMEDCTInferenceJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeSNOMEDCTInferenceJobResponse?: shared.DescribeSNOMEDCTInferenceJobResponse;
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

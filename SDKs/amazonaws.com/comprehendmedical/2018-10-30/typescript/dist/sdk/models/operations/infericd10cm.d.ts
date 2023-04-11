import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum InferIcd10CMXAmzTargetEnum {
    ComprehendMedical20181030InferIcd10CM = "ComprehendMedical_20181030.InferICD10CM"
}
export declare class InferIcd10CMRequest extends SpeakeasyBase {
    inferIcd10CMRequest: shared.InferIcd10CMRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: InferIcd10CMXAmzTargetEnum;
}
export declare class InferIcd10CMResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    inferIcd10CMResponse?: shared.InferIcd10CMResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidEncodingException
     */
    invalidEncodingException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * TextSizeLimitExceededException
     */
    textSizeLimitExceededException?: any;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}

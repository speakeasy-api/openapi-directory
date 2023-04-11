import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DetectEntitiesV2XAmzTargetEnum {
    ComprehendMedical20181030DetectEntitiesV2 = "ComprehendMedical_20181030.DetectEntitiesV2"
}
export declare class DetectEntitiesV2Request extends SpeakeasyBase {
    detectEntitiesV2Request: shared.DetectEntitiesV2Request;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DetectEntitiesV2XAmzTargetEnum;
}
export declare class DetectEntitiesV2Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    detectEntitiesV2Response?: shared.DetectEntitiesV2Response;
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

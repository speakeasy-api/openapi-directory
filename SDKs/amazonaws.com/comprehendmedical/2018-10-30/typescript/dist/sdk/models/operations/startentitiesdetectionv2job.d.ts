import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartEntitiesDetectionV2JobXAmzTargetEnum {
    ComprehendMedical20181030StartEntitiesDetectionV2Job = "ComprehendMedical_20181030.StartEntitiesDetectionV2Job"
}
export declare class StartEntitiesDetectionV2JobRequest extends SpeakeasyBase {
    startEntitiesDetectionV2JobRequest: shared.StartEntitiesDetectionV2JobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartEntitiesDetectionV2JobXAmzTargetEnum;
}
export declare class StartEntitiesDetectionV2JobResponse extends SpeakeasyBase {
    contentType: string;
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
    /**
     * Success
     */
    startEntitiesDetectionV2JobResponse?: shared.StartEntitiesDetectionV2JobResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}

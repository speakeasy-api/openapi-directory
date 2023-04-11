import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopEntitiesDetectionV2JobXAmzTargetEnum {
    ComprehendMedical20181030StopEntitiesDetectionV2Job = "ComprehendMedical_20181030.StopEntitiesDetectionV2Job"
}
export declare class StopEntitiesDetectionV2JobRequest extends SpeakeasyBase {
    stopEntitiesDetectionV2JobRequest: shared.StopEntitiesDetectionV2JobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopEntitiesDetectionV2JobXAmzTargetEnum;
}
export declare class StopEntitiesDetectionV2JobResponse extends SpeakeasyBase {
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    stopEntitiesDetectionV2JobResponse?: shared.StopEntitiesDetectionV2JobResponse;
}

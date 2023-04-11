import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchCheckLayerAvailabilityXAmzTargetEnum {
    SpencerFrontendServiceBatchCheckLayerAvailability = "SpencerFrontendService.BatchCheckLayerAvailability"
}
export declare class BatchCheckLayerAvailabilityRequest extends SpeakeasyBase {
    batchCheckLayerAvailabilityRequest: shared.BatchCheckLayerAvailabilityRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchCheckLayerAvailabilityXAmzTargetEnum;
}
export declare class BatchCheckLayerAvailabilityResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchCheckLayerAvailabilityResponse?: shared.BatchCheckLayerAvailabilityResponse;
    contentType: string;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * RegistryNotFoundException
     */
    registryNotFoundException?: any;
    /**
     * RepositoryNotFoundException
     */
    repositoryNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServerException
     */
    serverException?: any;
    /**
     * UnsupportedCommandException
     */
    unsupportedCommandException?: any;
}

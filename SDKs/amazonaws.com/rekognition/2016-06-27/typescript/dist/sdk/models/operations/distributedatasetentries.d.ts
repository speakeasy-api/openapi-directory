import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DistributeDatasetEntriesXAmzTargetEnum {
    RekognitionServiceDistributeDatasetEntries = "RekognitionService.DistributeDatasetEntries"
}
export declare class DistributeDatasetEntriesRequest extends SpeakeasyBase {
    distributeDatasetEntriesRequest: shared.DistributeDatasetEntriesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DistributeDatasetEntriesXAmzTargetEnum;
}
export declare class DistributeDatasetEntriesResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    distributeDatasetEntriesResponse?: Record<string, any>;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * ProvisionedThroughputExceededException
     */
    provisionedThroughputExceededException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotReadyException
     */
    resourceNotReadyException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}

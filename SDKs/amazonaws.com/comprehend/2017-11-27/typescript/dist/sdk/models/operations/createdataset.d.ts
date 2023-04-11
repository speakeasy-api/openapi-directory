import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateDatasetXAmzTargetEnum {
    Comprehend20171127CreateDataset = "Comprehend_20171127.CreateDataset"
}
export declare class CreateDatasetRequest extends SpeakeasyBase {
    createDatasetRequest: shared.CreateDatasetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDatasetXAmzTargetEnum;
}
export declare class CreateDatasetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createDatasetResponse?: shared.CreateDatasetResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ResourceLimitExceededException
     */
    resourceLimitExceededException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * TooManyTagsException
     */
    tooManyTagsException?: any;
}

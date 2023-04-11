import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateDatasetExportJobXAmzTargetEnum {
    AmazonPersonalizeCreateDatasetExportJob = "AmazonPersonalize.CreateDatasetExportJob"
}
export declare class CreateDatasetExportJobRequest extends SpeakeasyBase {
    createDatasetExportJobRequest: shared.CreateDatasetExportJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDatasetExportJobXAmzTargetEnum;
}
export declare class CreateDatasetExportJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createDatasetExportJobResponse?: shared.CreateDatasetExportJobResponse;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * TooManyTagsException
     */
    tooManyTagsException?: any;
}

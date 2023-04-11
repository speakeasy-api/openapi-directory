import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateModelCardExportJobXAmzTargetEnum {
    SageMakerCreateModelCardExportJob = "SageMaker.CreateModelCardExportJob"
}
export declare class CreateModelCardExportJobRequest extends SpeakeasyBase {
    createModelCardExportJobRequest: shared.CreateModelCardExportJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateModelCardExportJobXAmzTargetEnum;
}
export declare class CreateModelCardExportJobResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createModelCardExportJobResponse?: shared.CreateModelCardExportJobResponse;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

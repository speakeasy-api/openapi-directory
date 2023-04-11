import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateModelCardXAmzTargetEnum {
    SageMakerCreateModelCard = "SageMaker.CreateModelCard"
}
export declare class CreateModelCardRequest extends SpeakeasyBase {
    createModelCardRequest: shared.CreateModelCardRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateModelCardXAmzTargetEnum;
}
export declare class CreateModelCardResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createModelCardResponse?: shared.CreateModelCardResponse;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

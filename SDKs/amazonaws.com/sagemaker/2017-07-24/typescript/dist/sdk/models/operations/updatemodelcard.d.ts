import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateModelCardXAmzTargetEnum {
    SageMakerUpdateModelCard = "SageMaker.UpdateModelCard"
}
export declare class UpdateModelCardRequest extends SpeakeasyBase {
    updateModelCardRequest: shared.UpdateModelCardRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateModelCardXAmzTargetEnum;
}
export declare class UpdateModelCardResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    /**
     * Success
     */
    updateModelCardResponse?: shared.UpdateModelCardResponse;
}

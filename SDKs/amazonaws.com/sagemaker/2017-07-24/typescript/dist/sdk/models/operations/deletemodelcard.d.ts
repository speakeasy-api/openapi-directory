import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteModelCardXAmzTargetEnum {
    SageMakerDeleteModelCard = "SageMaker.DeleteModelCard"
}
export declare class DeleteModelCardRequest extends SpeakeasyBase {
    deleteModelCardRequest: shared.DeleteModelCardRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteModelCardXAmzTargetEnum;
}
export declare class DeleteModelCardResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

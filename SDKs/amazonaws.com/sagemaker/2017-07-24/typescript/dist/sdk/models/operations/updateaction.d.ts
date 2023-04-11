import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateActionXAmzTargetEnum {
    SageMakerUpdateAction = "SageMaker.UpdateAction"
}
export declare class UpdateActionRequest extends SpeakeasyBase {
    updateActionRequest: shared.UpdateActionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateActionXAmzTargetEnum;
}
export declare class UpdateActionResponse extends SpeakeasyBase {
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
    /**
     * Success
     */
    updateActionResponse?: shared.UpdateActionResponse;
}

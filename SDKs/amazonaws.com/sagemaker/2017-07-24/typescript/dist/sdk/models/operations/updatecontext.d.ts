import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateContextXAmzTargetEnum {
    SageMakerUpdateContext = "SageMaker.UpdateContext"
}
export declare class UpdateContextRequest extends SpeakeasyBase {
    updateContextRequest: shared.UpdateContextRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateContextXAmzTargetEnum;
}
export declare class UpdateContextResponse extends SpeakeasyBase {
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
    updateContextResponse?: shared.UpdateContextResponse;
}

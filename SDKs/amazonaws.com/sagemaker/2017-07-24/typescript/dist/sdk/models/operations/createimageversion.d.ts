import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateImageVersionXAmzTargetEnum {
    SageMakerCreateImageVersion = "SageMaker.CreateImageVersion"
}
export declare class CreateImageVersionRequest extends SpeakeasyBase {
    createImageVersionRequest: shared.CreateImageVersionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateImageVersionXAmzTargetEnum;
}
export declare class CreateImageVersionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createImageVersionResponse?: shared.CreateImageVersionResponse;
    /**
     * ResourceInUse
     */
    resourceInUse?: any;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
}

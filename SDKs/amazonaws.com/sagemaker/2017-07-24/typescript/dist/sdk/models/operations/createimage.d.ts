import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateImageXAmzTargetEnum {
    SageMakerCreateImage = "SageMaker.CreateImage"
}
export declare class CreateImageRequest extends SpeakeasyBase {
    createImageRequest: shared.CreateImageRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateImageXAmzTargetEnum;
}
export declare class CreateImageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createImageResponse?: shared.CreateImageResponse;
    /**
     * ResourceInUse
     */
    resourceInUse?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
}

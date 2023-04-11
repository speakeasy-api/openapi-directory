import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateImageXAmzTargetEnum {
    SageMakerUpdateImage = "SageMaker.UpdateImage"
}
export declare class UpdateImageRequest extends SpeakeasyBase {
    updateImageRequest: shared.UpdateImageRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateImageXAmzTargetEnum;
}
export declare class UpdateImageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceInUse
     */
    resourceInUse?: any;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    /**
     * Success
     */
    updateImageResponse?: shared.UpdateImageResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteImageXAmzTargetEnum {
    SageMakerDeleteImage = "SageMaker.DeleteImage"
}
export declare class DeleteImageRequest extends SpeakeasyBase {
    deleteImageRequest: shared.DeleteImageRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteImageXAmzTargetEnum;
}
export declare class DeleteImageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteImageResponse?: Record<string, any>;
    /**
     * ResourceInUse
     */
    resourceInUse?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateFeatureMetadataXAmzTargetEnum {
    SageMakerUpdateFeatureMetadata = "SageMaker.UpdateFeatureMetadata"
}
export declare class UpdateFeatureMetadataRequest extends SpeakeasyBase {
    updateFeatureMetadataRequest: shared.UpdateFeatureMetadataRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateFeatureMetadataXAmzTargetEnum;
}
export declare class UpdateFeatureMetadataResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
